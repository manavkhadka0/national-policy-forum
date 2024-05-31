import { IAuthorProps } from './author';
import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type IBlogCategoryProps = {
  label: string;
  path: string;
};

export type IBlogPostProps = {
  id: string;
  slug: string;
  title: string;
  heroUrl: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  category: string;
  coverUrl: string;
  content: string;
  duration: string;
  description: string;
  author: IAuthorProps;
  shareLinks?: ISocialLinks;
};



export type IBlogListProps = {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  tags: string[];
  createdAt: Date;
  author: IAuthorProps;
  updatedAt: Date;
  coverUrl: string;
}
