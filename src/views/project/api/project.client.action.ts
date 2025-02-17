import AlumniLinkAPI from "@/shared/config/AxiosConfig";

export const accept_project_info = async () => {
  try {
    const res = await AlumniLinkAPI.post("");
    if (res.status === 200) {
      return res.data;
    }
  } catch (err: unknown) {
    console.error(err);
    return false;
  }
};
