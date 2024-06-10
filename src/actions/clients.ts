/* eslint-disable consistent-return */

'use server';

import axiosInstance, { endpoints } from 'src/utils/axios';

export const getClients = async () => {
  try {
    const res = await axiosInstance.get(endpoints.clients.list);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
