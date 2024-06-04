import axios, { AxiosRequestConfig } from 'axios';

import { HOST_API } from 'src/config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
  blog: {
    list: '/api/blog',
    post: (id: string) => `/api/blog/${id}`,
    latest_post: '/api/blogs/latest',
  },
  faq: {
    list: '/api/faq/',
  },
  testimonial: {
    list: '/api/testimonial/',
  },
  category: {
    list: '/api/category/',
    nameList: '/api/category-name/',
  },
  tag: {
    list: '/api/tag/',
  },
};
