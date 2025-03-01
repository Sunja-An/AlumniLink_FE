"use server";

import axios, { HeadersDefaults } from "axios";
import { get_refresh_token } from "@/shared/action/token/token.action";
import { cookies } from "next/headers";

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
  async (config) => {
    const cookies_store = cookies();
    const token = (await cookies_store).get("access-token")?.value ?? null;
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
    const cookies_store = cookies();
    const originalRequest = error.config;

    if (error.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken =
          (await cookies_store).get("refresh-token")?.value ?? ""; // Retrieve the stored refresh token.

        const response = await get_refresh_token(refreshToken);

        if (!response) {
          return false;
        }
        const { accessToken, newRefreshToken } = response.data;

        (await cookies_store).set("access-token", accessToken);
        (await cookies_store).set("refresh-token", newRefreshToken);

        AlumniLinkAPI.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        return AlumniLinkAPI(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);

        (await cookies_store).delete("access-token");
        (await cookies_store).delete("refresh-token");

        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default AlumniLinkAPI;
