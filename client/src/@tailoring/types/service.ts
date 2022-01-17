import { AxiosRequestConfig, Method } from "axios";
import { GlobalObj } from ".";

export interface ReqInputObj<T extends unknown = unknown> extends AxiosRequestConfig {
  url: string;
  method: Method;
  data?: T;
}

export interface FetchInputObj<T extends unknown = unknown> extends ReqInputObj<T> {}

export interface ResponseDataObj<T extends unknown = unknown> {
  data: GlobalObj<T>;
  error: {
    statusCode: number;
    message: string | string[];
    timestamp: string;
    path: string;
  };
}
