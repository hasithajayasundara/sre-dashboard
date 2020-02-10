import dashboardSaga from "./dashboard";
import signInSaga from "./signin";

/**
 * Add new sagas here
 */
const sagas = [dashboardSaga, signInSaga];

/**
 * Combine sagas for redux middleware
 */
export default sagaMiddleware => {
  sagas.forEach(saga => {
    sagaMiddleware.run(saga);
  });
};
