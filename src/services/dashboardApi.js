import axios from "axios";

/**
 * Dashboard component API
 */

const DASHBOARD_PREFIX = "/api/dashboard";

export default {
  dashboard: {
    fetchtErrorRate: payload =>
      axios
        .get(`${DASHBOARD_PREFIX}/metrics/errorRate?${payload}`)
        .then(res => res.data),
    fetchtLatency: payload =>
      axios
        .get(`${DASHBOARD_PREFIX}/metrics/latency${payload}`)
        .then(res => res.data),
    fetchtTotalUsers: payload =>
      axios
        .get(`${DASHBOARD_PREFIX}/metrics/totalUsers${payload}`)
        .then(res => res.data),
    fetchtErrorBudget: payload =>
      axios
        .get(`${DASHBOARD_PREFIX}/metrics/errorBudget${payload}`)
        .then(res => res.data),
    fetchtJiraTickets: payload => axios.post(``).then(res => res.data)
  }
};
