import { combineReducers } from 'redux';
import dashboardReducer from './dashboard';
import signInReducer from './signin';
import sloReducer from './slo';

/**
 * Redux Store
 */
export default combineReducers({
    dashboard: dashboardReducer,
    signIn: signInReducer,
    slo: sloReducer,
});
