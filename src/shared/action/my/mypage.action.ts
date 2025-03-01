"use server";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { makeQueryStringMypage } from "@/shared/utils/query/makeQueryString";

export const getMyProjects = async () => {
  try {
    const queryString = makeQueryStringMypage("projects", 0, 10, "ASC");
    if (!queryString) {
      return false;
    }
    const res = await AlumniLinkAPI.get(queryString, {
      timeout: 50000,
    });
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    return err;
  }
};

export const getMyPosts = async () => {
  try {
    const queryString = makeQueryStringMypage("posts", 0, 10, "ASC");
    if (!queryString) {
      return false;
    }
    const res = await AlumniLinkAPI.get(queryString, {
      timeout: 50000,
    });
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    return err;
  }
};

export const getProjectRequests = async () => {
  try {
    const res = await AlumniLinkAPI.get("/projects/requests", {
      timeout: 50000,
    });
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
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
    if (res.status === 201) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    return err;
  }
};

export const deleteMyInfo = async (id: number) => {
  try {
    const res = await AlumniLinkAPI.delete(`/posts/${id}`);
    if (res.status === 204) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return err;
  }
};
