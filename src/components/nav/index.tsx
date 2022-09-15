import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import GamepadIcon from "@mui/icons-material/Gamepad";
import MenuIcon from "@mui/icons-material/Menu";
import { invoke } from "@tauri-apps/api";

export default function Navbar() {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <GamepadIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            UMM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={() => {}}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
