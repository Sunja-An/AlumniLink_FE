"use server";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { LoginType } from "@/shared/types/sign/login";
import type { SignUpType } from "@/shared/types/sign/signup";
import Cookies from "js-cookie";

export const SignUpAPI = async (request: SignUpType) => {
  try {
    const res = await AlumniLinkAPI.post("/auth/register", request);
    if (res.status === 201) {
      Cookies.set("access-token", res.data.accessToken);
      Cookies.set("refresh-token", res.data.refreshToken);
      return true;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const LoginAPI = async (request: LoginType) => {
  try {
    const res = await AlumniLinkAPI.post("/auth/login", request);
    if (res.status === 200) {
      Cookies.set("access-token", res.data.accessToken);
      Cookies.set("refresh-token", res.data.refreshToken);
      return true;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};
