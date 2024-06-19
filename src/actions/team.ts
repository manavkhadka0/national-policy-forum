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

export const getTeamMemberDetail = async (id: string) => {
  try {
    const res = await axiosInstance.get(endpoints.team.detail(id));
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
  return null; // Add a return statement at the end
};

export type TeamMemberRoles = {
  id: number;
  slug: string;
  name: string;
  heirarchy_level: number;
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
