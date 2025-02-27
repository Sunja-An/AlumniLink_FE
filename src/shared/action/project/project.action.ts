"use server";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { makeQueryString } from "@/shared/utils";

export const getProjectList = async ({
  page,
  size,
}: {
  page: number;
  size: number;
}) => {
  try {
    const queryString = makeQueryString("projects", page, size);
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
