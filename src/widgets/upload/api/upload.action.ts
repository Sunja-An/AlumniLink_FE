import { T_Post } from "@/entity/info/post";
import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { AxiosError } from "axios";

export const post_my_info = async (request: T_Post) => {
  try {
    const res = await AlumniLinkAPI.post("/posts", request);
    return res.data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      return {
        statusCode: err.status,
        message: err.message,
      };
    }
    return false;
  }
};
