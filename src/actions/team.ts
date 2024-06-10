import axiosInstance, { endpoints } from 'src/utils/axios';

// eslint-disable-next-line consistent-return
export const getTeamMembers = async () => {
  try {
    const res = await axiosInstance.get(endpoints.team.list);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
