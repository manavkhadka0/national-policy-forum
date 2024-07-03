/* eslint-disable consistent-return */
import axiosInstance, { endpoints } from 'src/utils/axios';

export const getJobsList = async () => {
  try {
    const res = await axiosInstance.get(endpoints.jobs.list);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSingleJob = async (slug: string) => {
  try {
    const res = await axiosInstance.get(endpoints.jobs.job_details(slug));

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
