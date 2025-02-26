import axios from "axios";

export const get_refresh_token = async (token: string) => {
  try {
    const server_url = process.env.NEXT_PUBLIC_KEY as string;
    const res = await axios.post(`${server_url}/auth/refresh`, token, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
