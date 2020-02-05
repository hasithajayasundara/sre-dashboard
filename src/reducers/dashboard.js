import {
  FETCH_ERROR_RATE_SUCCESS,
  FETCH_LATENCY_SUCCESS,
  FETCH_TOTAL_USERS_SUCCESS,
  FETCH_ERROR_BUDGET_SUCCESS,
  FETCH_ERROR_RATE_FAILED,
  FETCH_LATENCY_FAILED,
  FETCH_TOTAL_USERS_FAILED,
  FETCH_ERROR_BUDGET_FAILED,
  FETCH_JIRA_TICKETS_FAILED,
  FETCH_JIRA_TICKETS_SUCCESS,
  CHANGE_JIRA_TICKET_FILTER
} from "../actions/types";

const initialState = {
  metrics: {
    errorRate: {
      fetching: true,
      error: null,
      value: 0,
      trend: {
        value: 0,
        slope: -1
      }
    },
    latency: {
      fetching: true,
      error: null,
      value: 0,
      trend: {
        value: 0,
        slope: -1
      }
    },
    totalUsers: {
      fetching: true,
      error: null,
      value: 0,
      trend: {
        value: 0,
        slope: -1
      }
    },
    errorBudget: {
      fetching: true,
      error: null,
      value: 0,
      trend: {
        value: 0,
        slope: -1
      }
    }
  },
  jira: {
    fetching: true,
    error: null,
    total: 100,
    filter: { skip: 0, limit: 10, createdDate: "desc", status: [] },
    tickets: []
  }
};

const dashboardReducer = (state = initialState, action) => {
  let errorRate = { ...state.metrics.errorRate };
  let latency = { ...state.metrics.latency };
  let totalUsers = { ...state.metrics.totalUsers };
  let errorBudget = { ...state.metrics.errorBudget };
  switch (action.type) {
    case FETCH_ERROR_RATE_SUCCESS:
      errorRate.fetching = false;
      errorRate.error = null;
      return {
        ...state,
        metrics: {
          ...state.metrics,
          errorRate
        }
      };
    case FETCH_ERROR_RATE_FAILED:
      errorRate.fetching = false;
      errorRate.error = "An error occured while fetching data.";
      return {
        ...state,
        metrics: {
          ...state.metrics,
          errorRate
        }
      };
    case FETCH_LATENCY_SUCCESS:
      latency.fetching = false;
      latency.error = null;
      return {
        ...state,
        metrics: {
          ...state.metrics,
          latency
        }
      };
    case FETCH_LATENCY_FAILED:
      latency.fetching = false;
      latency.error = "An error occured while fetching data.";
      return {
        ...state,
        metrics: {
          ...state.metrics,
          latency
        }
      };
    case FETCH_TOTAL_USERS_SUCCESS:
      totalUsers.fetching = false;
      totalUsers.error = null;
      return {
        ...state,
        metrics: {
          ...state.metrics,
          totalUsers
        }
      };
    case FETCH_TOTAL_USERS_FAILED:
      totalUsers.fetching = false;
      totalUsers.error = "An error occured while fetching data.";
      return {
        ...state,
        metrics: {
          ...state.metrics,
          totalUsers
        }
      };
    case FETCH_ERROR_BUDGET_SUCCESS:
      errorBudget.fetching = false;
      errorBudget.error = null;
      return {
        ...state,
        metrics: {
          ...state.metrics,
          errorBudget
        }
      };
    case FETCH_ERROR_BUDGET_FAILED:
      errorBudget.fetching = false;
      totalUsers.error = "An error occured while fetching data.";
      return {
        ...state,
        metrics: {
          ...state.metrics,
          errorBudget
        }
      };
    case FETCH_JIRA_TICKETS_SUCCESS:
      return {
        ...state,
        jira: {
          ...state.jira,
          tickets: action.payload,
          fetching: false,
          error: null
        }
      };
    case FETCH_JIRA_TICKETS_FAILED:
      return {
        ...state,
        jira: {
          ...state.jira,
          fetching: false,
          error: "An error occured while fetching data."
        }
      };
    case CHANGE_JIRA_TICKET_FILTER:
      return {
        ...state,
        jira: {
          ...state.jira,
          fetching: true,
          filter: { ...state.jira.filter, ...action.payload }
        }
      };
    default:
      return state;
  }
};

export default dashboardReducer;
