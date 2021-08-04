import { createStore, applyMiddleware } from "redux";

// Importing Redux-persist for local storage
import { persistStore } from "redux-persist";

// Importing root reducer
import rootReducer from "./root-reducer";

// Importing middleware
import { logger } from "redux-logger";

// Storing middleware
const middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

// Creating redux store
export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);
