import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type ICaseStudyProps = {
  id: string;
  title: string;
  hero: string;
  created_at: Date;
  website: string;
  category: string;
  cover: string;
  description: string;
  galleryImgs: string[];
  socialLinks?: ISocialLinks;
};
