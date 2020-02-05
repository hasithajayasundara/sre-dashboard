import axios from "axios";

export default {
  dashboard: {
    getErrorRate: payload => axios.get(``).then(res => res.data),
    getLatency: payload => axios.get(``).then(res => res.data),
    getTotalUsers: payload => axios.get(``).then(res => res.data),
    getErrorBudget: payload => axios.get(``).then(res => res.data)
  }
};
