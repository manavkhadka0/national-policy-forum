import axiosInstance, { endpoints } from 'src/utils/axios';

export type Tags = {
  id: string;
  name: string;
};

export const getTags = async () => {
  try {
    const res = await axiosInstance.get(endpoints.tag.list);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
