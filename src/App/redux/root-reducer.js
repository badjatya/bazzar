// combine Reducers
import { combineReducers } from "redux";

// Importing Reducers
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});
