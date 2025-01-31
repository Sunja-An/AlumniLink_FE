"use server";

import { T_SinglePost } from "@/entity/info/post";
import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { AxiosError } from "axios";

export const get_single_info = async (id: string) => {
  try {
    const res = await AlumniLinkAPI.get(`/posts/${id}`);
    if (res.status === 200) {
      return res.data as T_SinglePost;
    }
  } catch (err: unknown) {
    console.error(err);
    return false;
  }
};
