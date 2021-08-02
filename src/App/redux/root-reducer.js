// combine Reducers
import { combineReducers } from "redux";

// Importing Reducers
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
