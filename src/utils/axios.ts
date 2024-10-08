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
  views: {
    increment: (modelName: string, slug: string) => `/api/increment-views/${modelName}/${slug}/`,
  },
  opportunity: {
    list: '/api/opportunity/',
    opportunity_details: (slug: string) => `/api/opportunity/${slug}`,
    latest_opportunities: '/api/opportunity?is_latest=True',
    featured_opportunities: '/api/opportunity?is_featured=True',
    type: '/api/opportunity-type',
    type_name: '/api/opportunity-type-name',
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
  jobs: {
    list: '/api/jobs/',
    job_details: (slug: string) => `/api/jobs/${slug}`,
  },
  event: {
    list: '/api/events/',
    event_details: (slug: string) => `/api/events/${slug}`,
    latest_events: '/api/events?is_latest=True',
    featured_events: '/api/events?is_featured=True',
  },
  team: {
    list: '/api/our-team/',
    roles: '/api/roles/',
    detail: (id: string) => `/api/our-team/${id}`,
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
