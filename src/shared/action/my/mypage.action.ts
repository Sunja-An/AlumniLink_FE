"use server";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { makeQueryString } from "@/shared/utils";

export const getMyProjects = async () => {
  try {
    const queryString = makeQueryString("projects", 0, 10);
    if (!queryString) {
      return false;
    }
    const res = await AlumniLinkAPI.get(queryString);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getMyPosts = async () => {
  try {
    const queryString = makeQueryString("posts", 0, 10);
    if (!queryString) {
      return false;
    }
    const res = await AlumniLinkAPI.get(queryString);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getProjectRequests = async () => {
  try {
    const res = await AlumniLinkAPI.get("/projects/requests");
    console.log(res);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const postProjectResponse = async ({
  projectId,
  tf,
}: {
  projectId: string;
  tf: boolean;
}) => {
  try {
    const request = {
      tf: tf,
    };
    const res = await AlumniLinkAPI.post(
      `/projects/requests/${projectId}`,
      request
    );
    return res.data;
  } catch (err) {
    return err;
  }
};
