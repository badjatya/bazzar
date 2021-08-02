import { createStore, applyMiddleware } from "redux";

// Importing root reducer
import rootReducer from "./root-reducer";

// Importing middleware
import { logger } from "redux-logger";

// Storing middleware
const middleware = [logger];

// Creating redux store
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
