/* eslint-disable consistent-return */

'use server';

import axiosInstance, { endpoints } from 'src/utils/axios';

export const getFaqs = async () => {
  try {
    const res = await axiosInstance.get(endpoints.faq.list);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

// ----------------------------------------------------------------------

export const getTestimonials = async () => {
  try {
    const res = await axiosInstance.get(endpoints.testimonial.list);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async () => {
  try {
    const res = await axiosInstance.get(endpoints.blog.list);

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

export type Category = {
  id: string;
  name: string;
  category_thumbnail: string;
  description: string;
};

export const getCategories = async () => {
  try {
    const res = await axiosInstance.get(endpoints.category.list);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
