/* eslint-disable consistent-return */
import axiosInstance, { endpoints } from "src/utils/axios";

export const getFeaturedPosts = async () => {
  try {
    const res = await axiosInstance.get(endpoints.blog.featured_posts);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLatestPosts = async () => {
  try {
    const res = await axiosInstance.get(endpoints.blog.latest_posts);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePost = async (slug: string) => {
  try {
    const res = await axiosInstance.get(endpoints.blog.post(slug));

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
