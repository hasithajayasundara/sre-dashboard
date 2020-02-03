import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import registerSagasWithMiddleware from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));
registerSagasWithMiddleware(sagaMiddleware);

export default ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
