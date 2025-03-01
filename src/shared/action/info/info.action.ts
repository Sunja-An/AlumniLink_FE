"use server";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import type { QueryStringSortType } from "@/shared/types";
import { makeQueryString } from "@/shared/utils";

export const getInfoList = async ({
  page,
  size,
  sort,
}: {
  page: number;
  size: number;
  sort: QueryStringSortType;
}) => {
  try {
    const queryString = makeQueryString("posts", page, size, sort);
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
  sort,
}: {
  id: string;
  page: number;
  size: number;
  sort: QueryStringSortType;
}) => {
  try {
    const queryString = makeQueryString("comments", page, size, sort);
    if (!queryString) {
      return false;
    }
    const res = await AlumniLinkAPI.get(queryString, {
      data: { postId: id },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
