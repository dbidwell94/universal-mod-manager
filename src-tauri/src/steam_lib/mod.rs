#[cfg(target_os = "windows")]
const STEAM_PATH: &'static str = "";
#[cfg(target_os = "linux")]
const STEAM_PATH: &'static str = "~/.var/app/com.valvesoftware.Steam/.local/share/Steam/steamapps/common";
#[cfg(target_os = "macos")]
const STEAM_PATH: &'static str = "";

use anyhow::Result as AnyhowResult;


pub fn get_installed_steam_games_list() -> AnyhowResult<Vec<String>> {
    todo!();
}