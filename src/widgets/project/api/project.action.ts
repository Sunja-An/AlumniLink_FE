"use server";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { makeQueryString } from "@/shared/utils/make_query_string";

const get_project_list = async (page: number, size: number) => {
  try {
    const url = makeQueryString("projects", page, size);
    const res = await AlumniLinkAPI.get(url);
    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export { get_project_list };
