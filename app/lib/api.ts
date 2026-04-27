import axios from "axios";

export const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getBlogs = async () => {
  const res = await api.get("/blogs");
  console.log("API Response for /blogs:", res);
  return res.data;
};
