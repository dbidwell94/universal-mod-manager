import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const SquareImg = styled.img<{ hovered?: boolean }>`
  height: 100%;
  width: auto;
  transition: 0.0625s ease-in-out border-color, 0.0625s ease-in-out filter;
  border: thin solid transparent;
  border-color: ${({ hovered }) => (hovered ? "white" : "transparent")};
  filter: ${({ hovered }) => (hovered ? "blur(0)" : "blur(.0625rem)")};
`;

export default function TopBar() {
  const [imgIsHovered, setImgIsHovered] = useState(false);

  return (
    <Paper sx={{ py: 0, height: "8rem" }}>
      <Box sx={{ display: "flex", height: "100%", width: "auto" }}>
        <SquareImg
          src='https://upload.wikimedia.org/wikipedia/en/7/77/Valheim_2021_logo.jpg'
          onMouseEnter={() => setImgIsHovered(true)}
          onMouseLeave={() => setImgIsHovered(false)}
          hovered={imgIsHovered}
        />
      </Box>
    </Paper>
  );
}
