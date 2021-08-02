import React from "react";
import ReactDOM from "react-dom";

// React router dom
import { BrowserRouter } from "react-router-dom";

// Importing Redux Provider
import { Provider } from "react-redux";
import store from "./App/redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
