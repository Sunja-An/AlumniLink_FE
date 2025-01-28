"use server";

import { T_SignUp } from "@/entity/user/user";
import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { cookies } from "next/headers";

export const SignIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const cookie_store = cookies();
    const request = {
      email: email,
      password: password,
    };
    const res = await AlumniLinkAPI.post("/auth/login", request);

    (await cookie_store).set("access-token", res.data.accessToken);
    (await cookie_store).set("refresh-token", res.data.refreshToken);

    return true;
  } catch (err) {
    return false;
  }
};

export const SignUp = async (request: T_SignUp) => {
  try {
    const cookie_store = cookies();
    const res = await AlumniLinkAPI.post("/auth/register", request);

    (await cookie_store).set("access-token", res.data.accessToken);
    (await cookie_store).set("refresh-token", res.data.refreshToken);
    return true;
  } catch (err) {
    return false;
  }
};
