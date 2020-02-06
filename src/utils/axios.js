import axios from "axios";

export default function setupAxios() {
  axios.interceptors.request.use(
    request => {
      return request;
    },
    error => {
      return Promise.reject(error);
    }
  );
  createAxiosResponseInterceptor();
}

const createAxiosResponseInterceptor = () => {
  const axiosResponseInterceptor = axios.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      let errorResponse = error.response;
      if (errorResponse && errorResponse.status === 401) {
      }
      return Promise.reject(error);
    }
  );
};
