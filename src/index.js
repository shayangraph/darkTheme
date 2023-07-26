import React from "react";
import ReactDOM from "react-dom";

import "./assets/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import DefaultLayout from "./layouts/Default";
import { ThemeProvider } from "./contexts/theme";

ReactDOM.render(
  <ThemeProvider>
    <DefaultLayout />
  </ThemeProvider>,
  document.getElementById("root")
);
