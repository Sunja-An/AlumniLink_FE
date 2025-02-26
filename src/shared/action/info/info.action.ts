"use server";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { makeQueryString } from "@/shared/utils";
import { makeCommentQueryString } from "@/shared/utils/query/makeQueryString";

export const getInfoList = async ({
  page,
  size,
}: {
  page: number;
  size: number;
}) => {
  try {
    const queryString = makeQueryString("posts", page, size);
    if (!queryString) {
      return false;
    }
    const res = await AlumniLinkAPI.get(queryString);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getSingleInfo = async (id: string) => {
  try {
    const res = await AlumniLinkAPI.get(`/posts/${id}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getSingleInfoComments = async ({
  id,
  page,
  size,
}: {
  id: string;
  page: number;
  size: number;
}) => {
  try {
    const queryString = makeCommentQueryString("posts", id, page, size);
    if (!queryString) {
      return false;
    }
    const res = await AlumniLinkAPI.get(queryString);
    return res.data;
  } catch (err) {
    return err;
  }
};
