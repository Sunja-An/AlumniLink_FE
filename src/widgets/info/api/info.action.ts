"use server";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { makeQueryString } from "@/shared/utils/make_query_string";

const get_info_list = async (page: number, size: number) => {
  try {
    const url = makeQueryString("posts", page, size);
    const res = await AlumniLinkAPI.get(url);
    console.log(res.data.content);
    return res.data;
  } catch (err: any) {
    return false;
  }
};

export { get_info_list };
