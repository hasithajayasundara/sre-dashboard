import {
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
  FETCH_ERROR_BUDGET_FAILED,
  FETCH_JIRA_TICKETS,
  FETCH_JIRA_TICKETS_FAILED,
  FETCH_JIRA_TICKETS_SUCCESS,
  CHANGE_JIRA_TICKET_FILTER
} from "./types";

/**
 * Fetch error rate actions
 */
export const fetchErrorRate = payload => {
  return { type: FETCH_ERROR_RATE, payload };
};
export const fetchErrorRateSuccess = payload => {
  return { type: FETCH_ERROR_RATE_SUCCESS, payload };
};
export const fetchErrorRateFailed = payload => {
  return { type: FETCH_ERROR_RATE_FAILED, payload };
};

/**
 * Fetch latency actions
 */
export const fetchLatency = payload => {
  return { type: FETCH_LATENCY, payload };
};
export const fetchLatencySuccess = payload => {
  return { type: FETCH_LATENCY_SUCCESS, payload };
};
export const fetchLatencyFailed = payload => {
  return { type: FETCH_LATENCY_FAILED, payload };
};

/**
 * Fetch total users action
 */
export const fetchTotalUsers = payload => {
  return { type: FETCH_TOTAL_USERS, payload };
};
export const fetchTotalUsersSuccess = payload => {
  return { type: FETCH_TOTAL_USERS_SUCCESS, payload };
};
export const fetchTotalUsersFailed = payload => {
  return { type: FETCH_TOTAL_USERS_FAILED, payload };
};

/**
 * Fetch error budget action
 */
export const fetchErrorBudget = payload => {
  return { type: FETCH_ERROR_BUDGET, payload };
};
export const fetchErrorBudgetSuccess = payload => {
  return { type: FETCH_ERROR_BUDGET_SUCCESS, payload };
};
export const fetchErrorBudgetFailed = payload => {
  return { type: FETCH_ERROR_BUDGET_FAILED, payload };
};

/**
 * Fetch jira tickets action
 */
export const fetchJiraTickets = payload => {
  return { type: FETCH_JIRA_TICKETS, payload };
};
export const fetchJiraTicketsSuccess = payload => {
  return { type: FETCH_JIRA_TICKETS_SUCCESS, payload };
};
export const fetchJiraTicketsFailed = payload => {
  return { type: FETCH_JIRA_TICKETS_FAILED, payload };
};
export const changeJiraTicketFilter = payload => {
  return { type: CHANGE_JIRA_TICKET_FILTER, payload };
};
