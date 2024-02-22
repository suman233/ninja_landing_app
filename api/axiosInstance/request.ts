import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from ".";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const errorBody = <T>(error: AxiosError<T>) => error.response?.data!;

const ApiRequest = {
  get: <T>(url: string) =>
    axiosInstance.get<T>(url).then(responseBody).catch(errorBody),
  post: <T>(url: string, body: {}) =>
    axiosInstance.post<T>(url, body).then(responseBody).catch(errorBody)
};

export default ApiRequest;
