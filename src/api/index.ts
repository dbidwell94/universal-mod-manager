import { invoke } from "@tauri-apps/api";

type ModInfo = {
  name: String;
  summary: String;
  picture_url: String;
  mod_downloads: number;
  mod_unique_downloads: number;
  uid: number;
  mod_id: number;
  game_id: number;
  allow_rating: boolean;
  domain_name: String;
  category_id: number;
  version: String;
  endorsement_count: number;
  created_timestamp: number;
  updated_timestamp: number;
  author: String;
  uploaded_by: String;
  uploaded_users_profile_url: String;
  contains_adult_content: boolean;
  status: String;
  available: boolean;
};

export default class NexusModManager {
  async getModInfoForGame(gameName: string, modId: number): Promise<ModInfo> {
    return await invoke<Promise<ModInfo>>("get_mod_info_for_game", { gameName, modId });
  }
}
