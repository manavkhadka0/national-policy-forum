/* eslint-disable consistent-return */

'use server';

import axiosInstance, { endpoints } from 'src/utils/axios';

export const getEvents = async () => {
  try {
    const res = await axiosInstance.get(endpoints.event.list);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSingleEvent = async (slug: string) => {
  try {
    const res = await axiosInstance.get(endpoints.event.event_details(slug));

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLatestEvent = async () => {
  try {
    const res = await axiosInstance.get(endpoints.event.latest_events);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
