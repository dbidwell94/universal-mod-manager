import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Provider } from "react-redux";
import { css, Global } from "@emotion/react";
import store from "./state";

const globalStyle = css`
  body {
    display: flex;
    height: 100vh;
    width: 100%;
    #root {
      width: 100%;
      height: 100%;
      display: flex;
    }
  }
`;

function AppWrapper() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = createTheme({
    spacing: 10,
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Global styles={globalStyle} />
          <App />
        </ThemeProvider>
      </Provider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
);
