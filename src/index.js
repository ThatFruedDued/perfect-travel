import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
