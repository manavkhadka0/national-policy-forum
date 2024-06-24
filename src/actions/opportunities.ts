/* eslint-disable consistent-return */
import axiosInstance, { endpoints } from 'src/utils/axios';

export const getFeaturedOpportunities = async () => {
  try {
    const res = await axiosInstance.get(endpoints.opportunity.featured_opportunities);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLatestOpportunity = async () => {
  try {
    const res = await axiosInstance.get(endpoints.opportunity.latest_opportunities);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSingleOpportunity = async (slug: string) => {
  try {
    const res = await axiosInstance.get(endpoints.opportunity.opportunity_details(slug));

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getOpportunities = async () => {
  try {
    const res = await axiosInstance.get(endpoints.opportunity.list);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getOpportunityTypeName = async () => {
  try {
    const res = await axiosInstance.get(endpoints.opportunity.type_name);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getOpportunityType = async () => {
  try {
    const res = await axiosInstance.get(endpoints.opportunity.type);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export interface OpportunityType {
  id: number;
  slug: string;
  title: string;
  description: string;
  parent: number | null;
}
