import dashboardSaga from "./dashboard";

const sagas = [dashboardSaga];

export default sagaMiddleware => {
  sagas.forEach(saga => {
    sagaMiddleware.run(saga);
  });
};
