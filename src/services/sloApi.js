import axios from "axios";

const SLO_PREFIX = "/api/slo";

export default {
  slo: {
    getSLOFilters: () =>
      axios.get(`${SLO_PREFIX}/filters`).then(res => res.data),
    getSLOGraphData: payload =>
      axios.post(`${SLO_PREFIX}/sloGraph`, { ...payload }).then(res => res.data)
  }
};
