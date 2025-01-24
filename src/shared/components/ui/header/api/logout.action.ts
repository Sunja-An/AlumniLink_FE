import Cookies from "js-cookie";

export const user_logout = () => {
  try {
    Cookies.remove("access-token");
    Cookies.remove("refresh-token");
  } catch (err: any) {
    return err;
  }
};
