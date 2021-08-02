import React from "react";
import ReactDOM from "react-dom";

// React router dom
import { BrowserRouter } from "react-router-dom";

// Importing Redux Provider
import { Provider } from "react-redux";
import { store, persistor } from "./App/redux/store";

// Importing redux-persist for localStorage
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
