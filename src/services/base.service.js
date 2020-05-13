import axios from "axios";
import ENV from "@environments";
import { authenticationData } from "@models";

const getUrl = (url) => (url ? `/${url.toString().replace("/", "")}` : null);
const findRoute = (apiName) =>
  ENV.BACKEND_ROUTES.find((route) => route.route === apiName)?.url;
const getData = (promise) =>
  promise
    .then((response) => response?.data)
    .catch((error) => Promise.reject(error));

let notifier = (message) => {
  console.log(message);
};

export class BaseService {
  constructor(apiName, resourcePrefix, config) {
    this.client = axios.create(
      Object.assign(
        {},
        {
          timeout: 300000,
          baseURL: findRoute(apiName) + (resourcePrefix || ""),
          headers: {
            "Content-Type": "application/json",
          },
        },
        config
      )
    );
    this.client.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const message = error?.response?.data?.message;
        notifier(
          message ||
            `Não conseguimos conexão com este domínio ${findRoute(apiName)}`
        );
        return Promise.reject(error);
      }
    );

    this.client.interceptors.request.use(
      (config) => {
        config.params = {
          ...config.params,
          ...authenticationData,
        };
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  baseUrl() {
    return this.client.defaults.baseURL;
  }

  get(url, config) {
    return getData(this.client.get(getUrl(url), config));
  }
}

BaseService.enableGlobalErrorHandling = (errorNotifier) => {
  notifier = errorNotifier;
};
