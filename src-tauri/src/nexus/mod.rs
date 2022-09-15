pub mod models;

use anyhow::{anyhow, Result as AnyhowResult};
use models::ModInfo;
use reqwest::{
    header::{HeaderMap, ACCEPT, USER_AGENT},
    Client, ClientBuilder, Response,
};
use thiserror::Error;

#[derive(Error, Debug)]
pub enum NexusModsError {
    #[error("An error occurred while making request from Nexus Mods: {0:?}")]
    GeneralError(Response),
}

const NEXUS_MODS_BASE_URL: &'static str = "https://api.nexusmods.com";

pub struct NexusModsApiClient {
    client: Client,
}

impl NexusModsApiClient {
    pub fn new() -> Self {
        let mut headers = HeaderMap::new();

        if let Some(api_key) = std::env::var("NEXUS_MODS_API_KEY").ok() {
            headers.append("apikey", api_key.parse().unwrap());
        }

        let program_version = env!("CARGO_PKG_VERSION");
        let os_info = std::env::consts::OS;
        let arch = std::env::consts::ARCH;

        headers.append(ACCEPT, "application/json".parse().unwrap());
        headers.append(
            USER_AGENT,
            format!(
                "UniversalModManager/{program_version} ({os_info}; {arch}) reqwest/0.11.11"
            )
            .parse()
            .unwrap(),
        );

        println!("{:?}", headers);

        let client = ClientBuilder::default()
            .default_headers(headers)
            .build()
            .unwrap();

        Self { client }
    }

    pub async fn get_mod_info_for_game(
        &self,
        game_name: &str,
        mod_id: usize,
    ) -> AnyhowResult<ModInfo> {
        let response = self
            .client
            .get(&format!(
                "{NEXUS_MODS_BASE_URL}/v1/games/{game_name}/mods/{mod_id}.json"
            ))
            .send()
            .await?;

        if response.status().is_client_error() || response.status().is_server_error() {
            return Err(anyhow!(NexusModsError::GeneralError(response)));
        }

        let to_return: ModInfo = response.json().await?;
        return Ok(to_return);
    }
}
