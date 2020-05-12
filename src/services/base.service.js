import axios from "axios";
import ENV from "@environments";
import crypto from "crypto";

/* Marvel API Config */
const PRIV_KEY = "b97b275f00c65061c1c548114ece8c741cf8a27f";
const API_KEY = "dbb258f56cf0e85ba0a3bcf608741b2c";
const ts = new Date().getTime();
const hash = crypto
  .createHash("md5")
  .update(ts + PRIV_KEY + API_KEY)
  .digest("hex");

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
      (response) => response,
      (error) => {
        const message = error?.response?.data?.message;
        notifier(
          message ||
            `Não conseguimos conexão com este domínio ${findRoute(apiName)}`
        );
        return Promise.reject(error);
      }
    );
  }

  baseUrl() {
    return this.client.defaults.baseURL;
  }

  get(url, config) {
    return getData(
      this.client.get(
        getUrl(url),
        config
          ? config
          : {
              params: {
                apikey: API_KEY,
                ts: ts,
                hash: hash,
              },
            }
      )
    );
  }

  // post(url, data, config) {
  //   return this.client.post(getUrl(url), data, config);
  // }

  // put(url, data, config) {
  //   return this.client.put(getUrl(url), data, config);
  // }

  // patch(url, data, config) {
  //   return this.client.patch(getUrl(url), data, config);
  // }

  // delete(url, config) {
  //   return this.client.delete(getUrl(url), config);
  // }
}

BaseService.enableGlobalErrorHandling = (errorNotifier) => {
  notifier = errorNotifier;
};
