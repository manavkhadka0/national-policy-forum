import axiosInstance, { endpoints } from 'src/utils/axios';

export const getTeamMembers = async () => {
  try {
    const res = await axiosInstance.get(endpoints.team.list);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
  return null; // Add a return statement at the end
};

export const getTeamMembersRoles = async () => {
  try {
    const res = await axiosInstance.get(endpoints.team.roles);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
  return null; // Add a return statement at the end
};
