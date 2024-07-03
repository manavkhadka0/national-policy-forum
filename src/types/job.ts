import { MapOfficeProps } from 'src/components/map';

import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type IJobByCompanyProps = {
  id: string;
  name: string;
  logo: string;
  totalJobs: number;
};

export type IJobByCategoryProps = {
  id: string;
  name: string;
  icon: string;
  totalJobs: number;
};

export type IJobByCountryProps = {
  id: string;
  location: string;
  cover: string;
  totalJobs: number;
};
export type IDonationContentProps = {
  id: string;
  title: string;
  content: string;
};
export type IDonationDataProps = {
  id: string;
  name: string;
  email: string;
  amount: string;
  message: string;
  image: string;
};
export type IJobProps = {
  id: string;
  type: string;
  slug: string;
  level: string;
  deadline: Date;
  urgent: boolean;
  content: string;
  created_at: Date;
  category: string;
  location: string;
  skills: string[];
  totalViews: number;
  benefits: string[];
  favorited: boolean;
  languages: string[];
  salary: string | number;
  shareLinks: ISocialLinks;
  experience: string | number;
  locationMap: MapOfficeProps[];
  company: {
    name: string;
    logo: string;
  };
};

export type INPFJobProps = {
  id: string;
  slug: string;
  title: string;
  created_at: Date;
  updated_at: Date;
  cover: string;
  location: string;
  salary: string | number;
  type: string;
  experience: string | number;
  level: string;
  skills: string[];
  deadline: Date;
  description: string;
  urgent: boolean;
  content: string;
};

export type IJobFiltersProps = {
  filterType: string[];
  filterLevel: string[];
  filterSalary: number[];
  filterBenefits: string[];
  filterKeyword: string | null;
  filterLocation: string | null;
  filterCategories: string | null;
};
