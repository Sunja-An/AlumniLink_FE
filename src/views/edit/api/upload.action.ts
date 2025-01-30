import { type T_Post } from "@/entity/info/post";
import { type T_Project } from "@/entity/project/project";
import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { AxiosError } from "axios";

export const post_my_info = async (request: T_Post) => {
  try {
    const res = await AlumniLinkAPI.post("/posts", request);
    console.log(res);
    if (res.status === 201) {
      return true;
    }
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

export const post_my_project = async (request: T_Project) => {
  try {
    const res = await AlumniLinkAPI.post("/projects", request);
    console.log(res);
    if (res.status === 201) {
      return true;
    }
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
