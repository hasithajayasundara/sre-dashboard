import { call, all, takeEvery, takeLatest, put } from "redux-saga/effects";
import dashboardApi from "../services/dashboardApi";

import { GET_POSTS } from "../actions/types";

import { getPostsSuccess } from "../actions/dashboard";

function* getPosts() {
  try {
    const data = yield call(dashboardApi.dashboard.getPosts);
    yield put(getPostsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

function* watchGetPosts() {
  yield takeEvery(GET_POSTS, getPosts);
}

export default function* dashboardSaga() {
  yield all([watchGetPosts()]);
}
