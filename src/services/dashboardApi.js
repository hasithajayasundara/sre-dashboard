import axios from "axios";
import { fetchClientMSR } from "actions/dashboard";

/**
 * Dashboard component API
 */

const DASHBOARD_PREFIX = "/api/dashboard";
const METRICS_PREFIX = "/metrics";
const JIRA_PREFIX = "/jira";
const DEPLOYMENT_PREFIX = "/deployments";
const CLIENT_MSR_PREFIX = "/clientMSR";

export default {
  dashboard: {
    fetchtErrorRate: payload =>
      axios
        .get(`${DASHBOARD_PREFIX}${METRICS_PREFIX}/errorRate?${payload}`)
        .then(res => res.data),
    fetchtLatency: payload =>
      axios
        .get(`${DASHBOARD_PREFIX}${METRICS_PREFIX}/latency${payload}`)
        .then(res => res.data),
    fetchtTotalUsers: payload =>
      axios
        .get(`${DASHBOARD_PREFIX}${METRICS_PREFIX}/totalUsers${payload}`)
        .then(res => res.data),
    fetchtErrorBudget: payload =>
      axios
        .get(`${DASHBOARD_PREFIX}${METRICS_PREFIX}/errorBudget${payload}`)
        .then(res => res.data),
    fetchtJiraTickets: payload =>
      axios
        .post(`${DASHBOARD_PREFIX}${JIRA_PREFIX}/tickets`, payload)
        .then(res => res.data),
    fetchDeployments: payload =>
      axios
        .post(`${DASHBOARD_PREFIX}${DEPLOYMENT_PREFIX}`, payload)
        .then(res => res.data),
    fetchClientMSR: payload =>
      axios
        .post(`${DASHBOARD_PREFIX}${CLIENT_MSR_PREFIX}`, payload)
        .then(res => res.data)
  }
};
