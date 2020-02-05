import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  FETCH_ERROR_RATE,
  FETCH_ERROR_RATE_SUCCESS,
  FETCH_ERROR_RATE_FAILED,
  FETCH_LATENCY,
  FETCH_LATENCY_SUCCESS,
  FETCH_LATENCY_FAILED,
  FETCH_TOTAL_USERS,
  FETCH_TOTAL_USERS_SUCCESS,
  FETCH_TOTAL_USERS_FAILED,
  FETCH_ERROR_BUDGET,
  FETCH_ERROR_BUDGET_SUCCESS,
  FETCH_ERROR_BUDGET_FAILED
} from "./types";

export const fetchErrorRate = payload => {
  return { type: FETCH_ERROR_RATE, payload };
};
export const fetchErrorRateSuccess = payload => {
  return { type: FETCH_ERROR_RATE_SUCCESS, payload };
};
export const fetchErrorRateFailed = payload => {
  return { type: FETCH_ERROR_RATE_FAILED, payload };
};

export const fetchLatency = payload => {
  return { type: FETCH_LATENCY, payload };
};
export const fetchLatencySuccess = payload => {
  return { type: FETCH_LATENCY_SUCCESS, payload };
};
export const fetchLatencyFailed = payload => {
  return { type: FETCH_LATENCY_FAILED, payload };
};

export const fetchTotalUsers = payload => {
  return { type: FETCH_TOTAL_USERS, payload };
};
export const fetchTotalUsersSuccess = payload => {
  return { type: FETCH_TOTAL_USERS_SUCCESS, payload };
};
export const fetchTotalUsersFailed = payload => {
  return { type: FETCH_TOTAL_USERS_FAILED, payload };
};

export const fetchErrorBudget = payload => {
  return { type: FETCH_ERROR_BUDGET, payload };
};
export const fetchErrorBudgetSuccess = payload => {
  return { type: FETCH_ERROR_BUDGET_SUCCESS, payload };
};
export const fetchErrorBudgetFailed = payload => {
  return { type: FETCH_ERROR_BUDGET_FAILED, payload };
};
