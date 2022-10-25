import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface RequestConfig extends AxiosRequestConfig {}

export interface Response<T = unknown> extends AxiosResponse<T> {}

export const get = <T>(
  url: string,
  config: RequestConfig = {}
): Promise<Response<T>> => {
  return axios.get(url, config);
};

export const isRequestError = (error: Error): boolean => {
  return !!(error as AxiosError).response?.status;
};

export const extractErrorData = (
  error: unknown
): Pick<AxiosResponse, "data" | "status"> => {
  const axiosError = error as AxiosError;
  if (axiosError.response && axiosError.response.status) {
    return {
      data: axiosError.response.data,
      status: axiosError.response.status,
    };
  }
  throw Error(`The error ${error} is not a Request Error`);
};
