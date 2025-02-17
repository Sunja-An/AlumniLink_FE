"use server";

import { makeQueryString } from "@/shared";
import AlumniLinkAPI from "@/shared/config/AxiosConfig";

export const get_comments = async ({
  postId,
  page,
  size,
}: {
  postId: string;
  page: number;
  size: number;
}) => {
  try {
    const query = makeQueryString("comments", page, size);
    const request = {
      postId,
    };
    const res = await AlumniLinkAPI.get(query, { data: request });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
