/* eslint-disable consistent-return */
import axiosInstance, { endpoints } from "src/utils/axios";

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

export const getCategoriesNameOnly = async () => {
  try {
    const res = await axiosInstance.get(endpoints.category.nameList);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
