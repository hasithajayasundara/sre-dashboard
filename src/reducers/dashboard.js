import {
  FETCH_ERROR_RATE_SUCCESS,
  FETCH_LATENCY_SUCCESS,
  FETCH_TOTAL_USERS_SUCCESS,
  FETCH_ERROR_BUDGET_SUCCESS,
  FETCH_ERROR_RATE_FAILED,
  FETCH_LATENCY_FAILED,
  FETCH_TOTAL_USERS_FAILED,
  FETCH_ERROR_BUDGET_FAILED
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
      errorRate.error = "An error occured.";
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
      latency.error = "An error occured while fetching latency";
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
      totalUsers.error = "An error occured while fetching total users.";
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
      totalUsers.error = "An error occured.";
      return {
        ...state,
        metrics: {
          ...state.metrics,
          errorBudget
        }
      };
    default:
      return state;
  }
};

export default dashboardReducer;
