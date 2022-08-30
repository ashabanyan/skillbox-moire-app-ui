import Axios, { AxiosInstance } from "axios";
import { API_BASE_URL } from "@/constants/url";

export interface ApiAxios {
  (key?: string, type?: string): AxiosInstance;
}

const headers = { "Content-Type": "application/json" };

export const ApiService: ApiAxios = () =>
  Axios.create({
    baseURL: API_BASE_URL,
    headers: { ...headers },
  });
