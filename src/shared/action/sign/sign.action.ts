"use server";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { LoginType } from "@/shared/types/sign/login";
import type { SignUpType } from "@/shared/types/sign/signup";
import { cookies } from "next/headers";

export const SignUpAPI = async (request: SignUpType) => {
  const cookies_store = cookies();
  try {
    const res = await AlumniLinkAPI.post("/auth/register", request);
    if (res.status === 201) {
      (await cookies_store).set("access-token", res.data.accessToken);
      (await cookies_store).set("refresh-token", res.data.refreshToken);
      return res.data;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const LoginAPI = async (request: LoginType) => {
  const cookies_store = cookies();
  try {
    const res = await AlumniLinkAPI.post("/auth/login", request);
    if (res.status === 200) {
      (await cookies_store).set("access-token", res.data.accessToken);
      (await cookies_store).set("refresh-token", res.data.refreshToken);
      return res.data;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const LogoutAPI = async () => {
  const cookies_store = cookies();
  try {
    (await cookies_store).delete("access-token");
    (await cookies_store).delete("refresh-token");
    return true;
  } catch (err) {
    return err;
  }
};
