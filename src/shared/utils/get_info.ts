import Cookies from "js-cookie";
import { jwtDecode, JwtPayload } from "jwt-decode";

const get_my_info = () => {
  const token = Cookies.get("access-token");

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
    const decodedUser = jwtDecode(token);
    if (isValidToken(decodedUser)) {
      return decodedUser;
    } else {
      return false;
    }
  }
};

export { get_my_info };
