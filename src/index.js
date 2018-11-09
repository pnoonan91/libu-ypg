import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";

import theme from "./styles/theme";
import history from "./history";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
