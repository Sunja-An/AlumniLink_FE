import axios, { HeadersDefaults } from "axios";
import Cookies from "js-cookie";
import { get_refresh_token } from "@/shared/action/token.action";

const PUBLIC_API = process.env.NEXT_PUBLIC_KEY as string;

export const AlumniLinkAPI = axios.create({
  baseURL: PUBLIC_API,
  withCredentials: true,
});

type headers = {
  "Content-Type": string;
  Accept: string;
  Authorization: string;
  [key: string]: string;
};

AlumniLinkAPI.defaults.headers = {
  "Content-Type": "application/json;",
  Accept: "application/json",
} as headers & HeadersDefaults;

AlumniLinkAPI.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access-token") ?? null;
    const BearerToken = "Bearer " + token;
    if (token && config.headers) {
      config.headers.Authorization = BearerToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AlumniLinkAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get("refresh-token") ?? ""; // Retrieve the stored refresh token.

        const response = await get_refresh_token(refreshToken);

        if (!response) {
          return false;
        }
        console.log(response);
        const { accessToken, newRefreshToken } = response.data;

        Cookies.set("access-token", accessToken);
        Cookies.set("refresh-token", newRefreshToken);

        AlumniLinkAPI.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        return AlumniLinkAPI(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);

        // Token Clear Up
        Cookies.remove("access-token");
        Cookies.remove("refresh-token");

        // have to login
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default AlumniLinkAPI;
