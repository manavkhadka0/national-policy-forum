/* eslint-disable consistent-return */

'use server';

import axiosInstance, { endpoints } from 'src/utils/axios';

export const getDonationContent = async () => {
  try {
    const res = await axiosInstance.get(endpoints.donation.donation_content);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDonationData = async () => {
  try {
    const res = await axiosInstance.get(endpoints.donation.donation_data);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
