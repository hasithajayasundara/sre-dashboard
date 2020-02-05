import { call, all, takeEvery, put, delay } from "redux-saga/effects";
import dashboardApi from "../services/dashboardApi";

import { FETCH_ERROR_RATE } from "../actions/types";

import {
  fetchErrorRateSuccess,
  fetchErrorRateFailed,
  fetchErrorBudgetSuccess,
  fetchErrorBudgetFailed,
  fetchTotalUsersSuccess,
  fetchTotalUsersFailed,
  fetchLatencySuccess,
  fetchLatencyFailed
} from "../actions/dashboard";

function* fetchErrorRateSaga() {
  try {
    // const data = yield call(dashboardApi.dashboard.getErrorRate);
    yield delay(5000);
    yield put(fetchErrorRateSuccess());
  } catch (err) {
    yield put(fetchErrorRateFailed());
  }
}

function* fetchLatencySaga() {
  try {
    // const data = yield call(dashboardApi.dashboard.getLatency);
    yield delay(2000);
    yield put(fetchLatencySuccess());
  } catch (err) {
    yield put(fetchLatencyFailed());
  }
}

function* fetchTotalUsersSaga() {
  try {
    yield delay(8000);
    const data = yield call(dashboardApi.dashboard.getTotalUsers);
    yield put(fetchTotalUsersSuccess());
  } catch (err) {
    yield put(fetchTotalUsersFailed());
  }
}

function* fetchErrorBudgetSaga() {
  try {
    // const data = yield call(dashboardApi.dashboard.getErrorBudget);
    yield delay(4000);
    yield put(fetchErrorBudgetSuccess());
  } catch (err) {
    yield put(fetchErrorBudgetFailed());
  }
}

function* watchGetErrorRate() {
  yield takeEvery(FETCH_ERROR_RATE, fetchErrorRateSaga);
}

function* watchGetLatency() {
  yield takeEvery(FETCH_ERROR_RATE, fetchLatencySaga);
}

function* watchGetTotalUsers() {
  yield takeEvery(FETCH_ERROR_RATE, fetchTotalUsersSaga);
}

function* watchGetErrorBudget() {
  yield takeEvery(FETCH_ERROR_RATE, fetchErrorBudgetSaga);
}

export default function* dashboardSaga() {
  yield all([
    watchGetErrorRate(),
    watchGetLatency(),
    watchGetTotalUsers(),
    watchGetErrorBudget()
  ]);
}
