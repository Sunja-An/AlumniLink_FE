"use server";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { cookies } from "next/headers";

export const get_sign_in = async ({
  nickname,
  password,
}: {
  nickname: string;
  password: string;
}) => {
  try {
    const cookie_store = cookies();
    const request = {
      nickname: nickname,
      password: password,
    };
    const res = await AlumniLinkAPI.post("/auth/login", request);
    if (res.status === 200) {
      const EXPIRED_ACCESS = parseInt(process.env.EXPIRED_ACCESS ?? "3600");
      (await cookie_store).set("access-token", res.data.accessToken ?? "", {
        httpOnly: false,
        path: "/",
        maxAge: EXPIRED_ACCESS,
      });
      return 200;
    } else {
      return false;
    }
  } catch (err: any) {
    if (err.status === 401) {
      return 401; // Not Correct Password
    } else if (err.status === 404) {
      return 404; // No user in USER DB
    }
  }
};

export const get_sign_up = async ({
  nickname,
  password,
}: {
  nickname: string;
  password: string;
}) => {
  try {
    const request = {
      nickname: nickname,
      password: password,
    };
    const res = await AlumniLinkAPI.post("/auth/register", request);
    if (res.status === 200) {
      return 200;
    } else {
      return false;
    }
  } catch (err: any) {
    if (err.status === 400) {
      return 400;
    }
  }
};

export const get_admin_login = async ({
  nickname,
  password,
}: {
  nickname: string;
  password: string;
}) => {
  try {
    const request = {
      nickname: nickname,
      password: password,
    };
    const res = await AlumniLinkAPI.post("/auth/adminLogin", request);
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (err: any) {
    if (err.status === 400) {
      return false;
    }
  }
};
