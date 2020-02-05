import { combineReducers } from "redux";
import dashboardReducer from "./dashboard";

/**
 * Redux Store
 */
export default combineReducers({
  dashboard: dashboardReducer
});
