// combine Reducers
import { combineReducers } from "redux";

// importing Redux-persist for local storage
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Importing Reducers
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
