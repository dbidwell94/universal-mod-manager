use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub enum NumOrBool {
    Bool(bool),
    Num(u32)
}

#[derive(Serialize, Deserialize)]
pub struct ModCategory {
    category_id: usize,
    name: String,
    parent_category: NumOrBool
}

#[derive(Serialize, Deserialize)]
pub struct GameInfo {
    id: u64,
    name: String,
    form_url: String,
    nexusmods_url: String,
    genre: String,
    file_count: u64,
    downloads: usize,
    domain_name: String,
    approved_date: usize,
    file_views: usize,
    authors: u64,
    file_endorsements: usize,
    mods: u64,
    categories: Vec<ModCategory>,
}

#[derive(Serialize, Deserialize)]
pub struct ModInfo {
    name: String,
    summary: String,
    picture_url: String,
    mod_downloads: usize,
    mod_unique_downloads: usize,
    uid: usize,
    mod_id: u32,
    game_id: u32,
    allow_rating: bool,
    domain_name: String,
    category_id: u32,
    version: String,
    endorsement_count: usize,
    created_timestamp: usize,
    updated_timestamp: usize,
    author: String,
    uploaded_by: String,
    uploaded_users_profile_url: String,
    contains_adult_content: bool,
    status: String,
    available: bool
}