/* eslint-disable consistent-return */

'use server';

import axiosInstance, { endpoints } from 'src/utils/axios';

export const getGallery = async () => {
  try {
    const res = await axiosInstance.get(endpoints.gallery.list);

    if (res.status === 200) {
      return res.data.media;
    }
  } catch (error) {
    console.log(error);
  }
};
