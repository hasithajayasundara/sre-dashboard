import {
  call,
  all,
  takeEvery,
  put,
  delay,
  takeLatest
} from "redux-saga/effects";
import moment from "moment";

import dashboardApi from "../services/dashboardApi";

import { FETCH_ERROR_RATE, FETCH_JIRA_TICKETS } from "../actions/types";

import {
  fetchErrorRateSuccess,
  fetchErrorRateFailed,
  fetchErrorBudgetSuccess,
  fetchErrorBudgetFailed,
  fetchTotalUsersSuccess,
  fetchTotalUsersFailed,
  fetchLatencySuccess,
  fetchLatencyFailed,
  fetchJiraTicketsSuccess,
  fetchJiraTicketsFailed
} from "../actions/dashboard";

/**
 * Utility function to generate metrics request parameters
 */
function metricsRequestParams() {
  return `?from=${moment()
    .subtract(1, "months")
    .valueOf()}&to=${moment().valueOf()}`;
}

/**
 * Dashboard Saga Implementation
 */

function* fetchErrorRateSaga() {
  try {
    const data = yield call(
      dashboardApi.dashboard.fetchtErrorRate,
      metricsRequestParams()
    );
    yield put(fetchErrorRateSuccess(data));
  } catch (err) {
    yield put(fetchErrorRateFailed());
  }
}

function* fetchLatencySaga() {
  try {
    const data = yield call(
      dashboardApi.dashboard.fetchtLatency,
      metricsRequestParams()
    );
    yield put(fetchLatencySuccess(data));
  } catch (err) {
    yield put(fetchLatencyFailed());
  }
}

function* fetchTotalUsersSaga() {
  try {
    const data = yield call(
      dashboardApi.dashboard.fetchtTotalUsers,
      metricsRequestParams()
    );
    yield put(fetchTotalUsersSuccess(data));
  } catch (err) {
    yield put(fetchTotalUsersFailed());
  }
}

function* fetchErrorBudgetSaga() {
  try {
    const data = yield call(
      dashboardApi.dashboard.fetchtErrorBudget,
      metricsRequestParams()
    );
    yield put(fetchErrorBudgetSuccess(data));
  } catch (err) {
    yield put(fetchErrorBudgetFailed());
  }
}

function* fetchJiraTicketsSaga({ payload }) {
  let payloadCopy = { ...payload };
  let { skip, limit } = { ...payloadCopy };
  payloadCopy.skip = skip * limit;
  try {
    const data = yield call(
      dashboardApi.dashboard.fetchtJiraTickets,
      payloadCopy
    );
    yield put(fetchJiraTicketsSuccess(data || {}));
  } catch (err) {
    yield put(fetchJiraTicketsFailed());
  }
}

function* watchFetchErrorRate() {
  yield takeEvery(FETCH_ERROR_RATE, fetchErrorRateSaga);
}

function* watchFetchLatency() {
  yield takeEvery(FETCH_ERROR_RATE, fetchLatencySaga);
}

function* watchFetchTotalUsers() {
  yield takeEvery(FETCH_ERROR_RATE, fetchTotalUsersSaga);
}

function* watchFetchErrorBudget() {
  yield takeEvery(FETCH_ERROR_RATE, fetchErrorBudgetSaga);
}

function* watchFetchJiraTickets() {
  yield takeLatest(FETCH_JIRA_TICKETS, fetchJiraTicketsSaga);
}

export default function* dashboardSaga() {
  yield all([
    watchFetchErrorRate(),
    watchFetchLatency(),
    watchFetchTotalUsers(),
    watchFetchErrorBudget(),
    watchFetchJiraTickets()
  ]);
}
