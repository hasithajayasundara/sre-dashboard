import dashboardSaga from "./dashboard";

/**
 * Add new sagas here
 */
const sagas = [dashboardSaga];

/**
 * Combine sagas for redux middleware
 */
export default sagaMiddleware => {
  sagas.forEach(saga => {
    sagaMiddleware.run(saga);
  });
};
