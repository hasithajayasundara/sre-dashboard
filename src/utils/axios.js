import axios from "axios";
import { store } from "../Root";

export default function setupAxios() {
  axios.interceptors.request.use(
    config => {
      config.headers.Authorization = store.getState().signIn.user.id_token;
      return config;
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
