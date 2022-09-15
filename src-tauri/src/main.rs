#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use nexus::{models::ModInfo, NexusModsApiClient};
mod nexus;
mod steam_lib;

#[tauri::command]
async fn get_mod_info_for_game(game_name: &str, mod_id: usize) -> Result<ModInfo, String> {
    let nexus_api_client = NexusModsApiClient::new();
    let result = nexus_api_client
        .get_mod_info_for_game(game_name, mod_id)
        .await
        .map_err(|e| e.to_string())?;

    Ok(result)
}

#[tokio::main]
async fn main() {
    dotenv::dotenv().ok();

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_mod_info_for_game])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
