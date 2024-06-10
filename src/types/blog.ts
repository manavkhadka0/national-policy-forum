import { IAuthorProps } from './author';
import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type IBlogCategoryProps = {
  label: string;
  path: string;
};

export interface IBlogPostProps extends IBlogListProps {
  hero: string;
  content: string;
  share_links?: ISocialLinks;
}

export interface IPublicationProps extends IBlogPostProps {
  pdf: string;
}

export interface IBlogListProps {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  tags: string[];
  created_at: Date;
  author: IAuthorProps;
  updated_at: Date;
  cover: string;
}
