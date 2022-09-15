import { invoke } from "@tauri-apps/api/tauri";
import Button from "@mui/material/Button";
import { Paper, Typography } from "@mui/material";
import Navbar from "./components/nav";
import { useEffect } from "react";
import NexusModManager from "./api";

function App() {
  useEffect(() => {
    const nexusApi = new NexusModManager();
    nexusApi.getModInfoForGame("valheim", 1000);
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
