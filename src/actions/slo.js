import {
  SET_SLO_TYPE,
  SET_SLO_TIME_RANGE,
  SET_SLO_SERVICE_TYPE,
  SET_SLO_TIME_FORMAT,
  FETCH_SLO_FILTERS,
  FETCH_SLO_FILTERS_SUCCESS,
  FETCH_SLO_FILTERS_FAILED,
  SET_SLO_TIME,
  SET_SLO_RELATIVE_TIME,
  FETCH_SLO_GRAPH_DATA,
  FETCH_SLO_GRAPH_DATA_FAILED,
  FETCH_SLO_GRAPH_DATA_SUCCESS
} from "./types";

export const setSLOType = payload => {
  return { type: SET_SLO_TYPE, payload };
};

export const setSLOTimeRange = payload => {
  return { type: SET_SLO_TIME_RANGE, payload };
};

export const setSLOServiceType = payload => {
  return { type: SET_SLO_SERVICE_TYPE, payload };
};

export const setSLOTimeFormat = payload => {
  return { type: SET_SLO_TIME_FORMAT, payload };
};

export const setSLOTime = payload => {
  return { type: SET_SLO_TIME, payload };
};

export const fetchSLOFilters = payload => {
  return { type: FETCH_SLO_FILTERS, payload };
};

export const fetchSLOFiltersSuccess = payload => {
  return { type: FETCH_SLO_FILTERS_SUCCESS, payload };
};

export const fetchSLOFiltersFailed = payload => {
  return { type: FETCH_SLO_FILTERS_FAILED, payload };
};

export const setSLORelativeTime = payload => {
  return { type: SET_SLO_RELATIVE_TIME, payload };
};

export const fetchSLOGraphData = payload => {
  return { type: FETCH_SLO_GRAPH_DATA, payload };
};

export const fetchSLOGraphDataSuccess = payload => {
  return { type: FETCH_SLO_GRAPH_DATA_SUCCESS, payload };
};

export const fetchSLOGraphDataFailed = payload => {
  return { type: FETCH_SLO_GRAPH_DATA_FAILED, payload };
};
