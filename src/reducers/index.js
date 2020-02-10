import { combineReducers } from "redux";
import dashboardReducer from "./dashboard";
import signInReducer from "./signin";

/**
 * Redux Store
 */
export default combineReducers({
  dashboard: dashboardReducer,
  signIn: signInReducer
});
