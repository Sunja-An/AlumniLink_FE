"use server";

import { jwtDecode, JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";

export const tokenDecoder = async () => {
  const cookie_store = cookies();
  const token = (await cookie_store).get("access-token");

  // Token 이 유효한 토큰인지 Check
  // 만약 유효하지 않은 Token 이면 False 를 전달
  const isValidToken = (token: JwtPayload) => {
    if (token.exp === undefined) {
      return false;
    }
    return token.exp < Date.now();
  };

  // Token Validation
  if (token === null || token === undefined) return false;
  else {
    const decodedUser = jwtDecode(token.value);
    if (isValidToken(decodedUser)) {
      return decodedUser;
    } else {
      return false;
    }
  }
};
