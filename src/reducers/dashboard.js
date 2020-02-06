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
  CHANGE_JIRA_TICKET_FILTER,
  CHANGE_JIRA_TOCKET_CREATED_DATE,
  CHANGE_JIRA_TICKET_ROWS_PER_PAGE
} from "../actions/types";
import ErrorBudget from "views/Dashboard/components/ErrorBudget";

const initialState = {
  metrics: {
    errorRate: {
      fetching: true,
      error: null,
      value: 0,
      trend: {
        value: 0,
        slope: -1,
        description: ""
      }
    },
    latency: {
      fetching: true,
      error: null,
      value: 0,
      trend: {
        value: 0,
        slope: -1,
        description: ""
      }
    },
    totalUsers: {
      fetching: true,
      error: null,
      value: 0,
      trend: {
        value: 0,
        slope: -1,
        description: ""
      }
    },
    errorBudget: {
      fetching: true,
      error: null,
      value: 0,
      trend: {
        value: 0,
        slope: -1,
        description: ""
      }
    }
  },
  jira: {
    fetching: true,
    error: null,
    total: 0,
    filter: { skip: 0, limit: 10, dateOrder: "desc", status: [] },
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
          errorRate: {
            ...errorRate,
            ...action.payload
          }
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
          latency: {
            ...latency,
            ...action.payload
          }
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
          totalUsers: {
            ...totalUsers,
            ...action.payload
          }
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
          errorBudget: {
            ...ErrorBudget,
            ...action.payload
          }
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
      let { total, tickets } = action.payload;
      return {
        ...state,
        jira: {
          ...state.jira,
          total: total || 0,
          tickets: tickets || [],
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
          filter: { ...state.jira.filter, skip: action.payload }
        }
      };
    case CHANGE_JIRA_TOCKET_CREATED_DATE:
      return {
        ...state,
        jira: {
          ...state.jira,
          fetching: true,
          filter: { skip: 0, limit: 10, dateOrder: action.payload }
        }
      };
    case CHANGE_JIRA_TICKET_ROWS_PER_PAGE:
      return {
        ...state,
        jira: {
          ...state.jira,
          fetching: true,
          filter: {
            ...state.jira.filter,
            limit: action.payload
          }
        }
      };
    default:
      return state;
  }
};

export default dashboardReducer;
