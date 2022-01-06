import { AxiosRequestConfig, Method } from "axios";

export interface ReqInputObj<T extends unknown = unknown> extends AxiosRequestConfig {
  url: string;
  method: Method;
  data?: T;
}

export interface FetchInputObj<T extends unknown = unknown> extends ReqInputObj<T> {}
