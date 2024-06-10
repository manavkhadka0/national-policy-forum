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
    post: (slug: string) => `/api/blog/${slug}`,
    latest_posts: '/api/blog?is_latest=True',
    featured_posts: '/api/blog?is_featured=True',
  },
  publication: {
    list: '/api/publication/',
    publication_details: (slug: string) => `/api/publication/${slug}`,
    latest_publications: '/api/publication?is_latest=True',
    featured_publications: '/api/publication?is_featured=True',
    nameList: '/api/publication-name/',
  },
  navLinks: {
    list: '/api/nav-links/',
  },
  team: {
    list: '/api/our-team/',
  },
  faq: {
    list: '/api/faq/',
  },
  clients: {
    list: '/api/our-client/',
  },
  testimonial: {
    list: '/api/testimonial/',
  },
  donation: {
    donation_content: '/api/donation-content/',
    donation_data: '/api/donations/',
  },
  category: {
    list: '/api/category/',
    nameList: '/api/category-name/',
  },
  gallery: {
    list: '/api/media',
    images: '/api/images',
    videos: '/api/videos',
  },
  tag: {
    list: '/api/tag/',
  },
};
