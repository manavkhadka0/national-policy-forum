import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type ITeamMemberProps = {
  id: string;
  name: string;
  role: string;
  photo: string;
  socialLinks?: ISocialLinks;
};

export type IOurTeamProps = {
  id: string;
  name: string;
  bio: string;
  role: string;
  photo: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
};
