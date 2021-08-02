import React from "react";
import ReactDOM from "react-dom";

// React router dom
import { BrowserRouter } from "react-router-dom";

// Importing Redux Provider
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
