"use server";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { QueryStringSortType } from "@/shared/types";
import { makeQueryString } from "@/shared/utils";

export const getProjectList = async ({
  page,
  size,
  sort,
}: {
  page: number;
  size: number;
  sort: QueryStringSortType;
}) => {
  try {
    const queryString = makeQueryString("projects", page, size, sort);
    if (!queryString) {
      return false;
    }
    const res = await AlumniLinkAPI.get(queryString);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getSingleProject = async (id: string) => {
  try {
    const res = await AlumniLinkAPI.get(`/projects/${id}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getMyProjectRequest = async () => {
  try {
    const res = await AlumniLinkAPI.get("/projects/requests");
    return res.data;
  } catch (err) {
    return err;
  }
};

export const postProjectRequest = async (id: string) => {
  try {
    const res = await AlumniLinkAPI.post(`/projects/${id}`);
    if (res.status === 200) {
      return true;
    }
  } catch (err) {
    return err;
  }
};

export const deleteProject = async (id: number) => {
  try {
    const res = await AlumniLinkAPI.delete(`/projects/${id}`);
    if (res.status === 204) {
      return true;
    }
  } catch (err) {
    return err;
  }
};

export const getOutProject = async (id: number) => {
  try {
    const res = await AlumniLinkAPI.delete(`/projects/my/${id}`);
    if (res.status === 204) {
      return true;
    }
  } catch (err) {
    return err;
  }
};
