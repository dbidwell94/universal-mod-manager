import { Paper } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { useState } from "react";

const SquareImg = styled.img`
  height: 100%;
  width: auto;
  filter: blur(0.0625);
  transition: 0.0625s ease-in-out border-color, 0.0625s ease-in-out filter;
  margin: 0 0.25rem;
  border: thin solid transparent;
  border-color: transparent;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    border-color: white;
    filter: blur(0);
  }
`;

export default function TopBar() {
  const [installedGames, setInstalledGames] = useState(["Valheim", "Stormworks", "Skyrim", "Valheim", "Stormworks", "Skyrim", "Valheim", "Stormworks", "Skyrim"]);

  return (
    <Paper sx={{ py: 0, height: "8rem" }}>
      <Box sx={{ display: "flex", height: "100%", width: "auto", overflowX: "auto" }}>
        {installedGames.map((gameName, index) => {
          return (
            <SquareImg
              key={index}
              src='https://upload.wikimedia.org/wikipedia/en/7/77/Valheim_2021_logo.jpg'
            />
          );
        })}
      </Box>
    </Paper>
  );
}
