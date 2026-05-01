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

export const getBlogBySlug = async (slug: string) => {
  try {
    const res = await api.get(`/blogs/${slug}`);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw error;
  }
};

export const getRelatedBlogs = async (slug: string) => {
  const res = await api.get(`/blogs/related/${slug}`);
  return res.data;
};

export const getDevelopers = async (filters: any) => {
  const res = await api.get("/developers", { params: filters });
  return res.data;
};

export const getDeveloperBySlug = async (slug: string) => {
  try {
    const res = await api.get(`/developers/${slug}`);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw error;
  }
};
