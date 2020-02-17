import axios from "axios";
// import { getToken, removeToken } from "@/utils/auth";

let apiHost = require("../setting/api-host").apiHost;

// create an axios instance
const service = axios.create({
  baseURL: apiHost, // api 的 base_url
  timeout: 50000 // request timeout
});

// request拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    return response.data;
  },
  error => {
    if (error.response.status == 401) {
      return Promise.reject(error);
    } else if (error.response.status == 400) {

      return Promise.reject(error);
    } else {

    }
  }
);

export default service;
