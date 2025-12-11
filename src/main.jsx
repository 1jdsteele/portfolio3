import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

const theme = createTheme({
  palette: {
    mode: "dark", // change to "light" if you want
    primary: {
      main: "#4f46e5", // indigo-ish
    },
    background: {
      default: "#0b1020",
      paper: "#111827",
    },
  },
  shape: {
    borderRadius: 18,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
