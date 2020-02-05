import {
  call,
  all,
  takeEvery,
  put,
  delay,
  takeLatest
} from "redux-saga/effects";
import dashboardApi from "../services/dashboardApi";

import { FETCH_ERROR_RATE, FETCH_JIRA_TICKETS } from "../actions/types";

// Remove this when backend API completed
import data from "../mock/data";

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
 * Dashboard Saga Implementation
 */

function* fetchErrorRateSaga() {
  try {
    // const data = yield call(dashboardApi.dashboard.fetchtErrorRate);
    yield delay(5000);
    yield put(fetchErrorRateSuccess());
  } catch (err) {
    yield put(fetchErrorRateFailed());
  }
}

function* fetchLatencySaga() {
  try {
    // const data = yield call(dashboardApi.dashboard.fetchtLatency);
    yield delay(2000);
    yield put(fetchLatencySuccess());
  } catch (err) {
    yield put(fetchLatencyFailed());
  }
}

function* fetchTotalUsersSaga() {
  try {
    yield delay(8000);
    const data = yield call(dashboardApi.dashboard.fetchtTotalUsers);
    yield put(fetchTotalUsersSuccess());
  } catch (err) {
    yield put(fetchTotalUsersFailed());
  }
}

function* fetchErrorBudgetSaga() {
  try {
    // const data = yield call(dashboardApi.dashboard.fetchtErrorBudget);
    yield delay(4000);
    yield put(fetchErrorBudgetSuccess());
  } catch (err) {
    yield put(fetchErrorBudgetFailed());
  }
}

function* fetchJiraTicketsSaga() {
  try {
    // const data = yield call(dashboardApi.dashboard.fetchtJiraTickets);
    yield delay(5000);
    yield put(fetchJiraTicketsSuccess(data));
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
