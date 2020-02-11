import dashboardSaga from "./dashboard";
import signInSaga from "./signin";
import sloSaga from "./slo";

/**
 * Add new sagas here
 */
const sagas = [dashboardSaga, signInSaga, sloSaga];

/**
 * Combine sagas for redux middleware
 */
export default sagaMiddleware => {
  sagas.forEach(saga => {
    sagaMiddleware.run(saga);
  });
};
