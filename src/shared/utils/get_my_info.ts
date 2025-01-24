import Cookies from "js-cookie";

export const get_my_info = () => {
  return Cookies.get("access-token") ?? null;
};
