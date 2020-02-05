import axios from "axios";

/**
 * Dashboard component API
 */
export default {
  dashboard: {
    fetchtErrorRate: payload => axios.get(``).then(res => res.data),
    fetchtLatency: payload => axios.get(``).then(res => res.data),
    fetchtTotalUsers: payload => axios.get(``).then(res => res.data),
    fetchtErrorBudget: payload => axios.get(``).then(res => res.data),
    fetchtJiraTickets: payload => axios.post(``).then(res => res.data)
  }
};
