import {
  call,
  all,
  takeEvery,
  put,
  delay,
  takeLatest
} from "redux-saga/effects";

import signInAPi from "../services/signInApi";

import { FETCH_GOOGLE_PROFILE } from "../actions/types";

import {
  fetchGoogleProfileSuccess,
  fetchGoogleProfileFailed
} from "../actions/signin";

/**
 * Sign In saga implementation
 */

function* fetchGoogleProfile({ payload }) {
  try {
    const data = yield call(signInAPi.signIn.verifyIdToken, payload);
    yield put(fetchGoogleProfileSuccess(data || {}));
  } catch (err) {
    yield put(fetchGoogleProfileFailed());
  }
}

function* watchFetchGoogleProfile() {
  yield takeLatest(FETCH_GOOGLE_PROFILE, fetchGoogleProfile);
}

export default function* signInSaga() {
  yield all([watchFetchGoogleProfile()]);
}
