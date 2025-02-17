import AlumniLinkAPI from "../config/AxiosConfig";

export const get_my_project_request = async () => {
  try {
    const res = await AlumniLinkAPI.get("/projects/requests");
    return res.data;
  } catch (err) {
    return err;
  }
};

export const post_request_project = async (id: string) => {
  try {
    const res = await AlumniLinkAPI.post(`/projects/${id}`);
    if (res.status === 200) {
      return true;
    }
  } catch (err) {
    return err;
  }
};
