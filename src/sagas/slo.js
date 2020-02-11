import {
    call,
    all,
    takeEvery,
    put,
    delay,
    takeLatest,
} from 'redux-saga/effects';

import sloApi from '../services/sloApi';

import { FETCH_SLO_FILTERS, FETCH_SLO_GRAPH_DATA } from '../actions/types';

import {
    fetchSLOFiltersSuccess,
    fetchSLOFiltersFailed,
    fetchSLOGraphDataSuccess,
    fetchSLOGraphDataFailed,
} from '../actions/slo';

/**
 * Sign In saga implementation
 */

function* fetchSLOFiltersSaga() {
    try {
        const data = yield call(sloApi.slo.getSLOFilters);
        yield put(fetchSLOFiltersSuccess(data));
    } catch (err) {
        yield put(fetchSLOFiltersFailed());
    }
}

function* fetchSLOGraphDataSaga({ payload }) {
    try {
        let data = yield call(sloApi.slo.getSLOGraphData, payload);
        yield put(fetchSLOGraphDataSuccess(data));
    } catch (err) {
        yield put(fetchSLOGraphDataFailed());
    }
}

function* watchFetchSLOFilters() {
    yield takeLatest(FETCH_SLO_FILTERS, fetchSLOFiltersSaga);
}

function* watchFetchSLOGraphData() {
    yield takeLatest(FETCH_SLO_GRAPH_DATA, fetchSLOGraphDataSaga);
}

export default function* sloSaga() {
    yield all([watchFetchSLOFilters(), watchFetchSLOGraphData()]);
}
