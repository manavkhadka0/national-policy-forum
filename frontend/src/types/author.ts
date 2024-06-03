import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type IAuthorProps = {
  name: string;
  role: string;
  about: string;
  quotes: string;
  avatar: string;
  verified?: boolean;
  phone_number?: string;
  rating_number?: number;
  total_reviews?: number;
  social_links?: ISocialLinks;
};
