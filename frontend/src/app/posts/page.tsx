import { getPosts, Category, getCategories } from 'src/actions/faq';

import TravelPostsView from 'src/sections/_travel/view/travel-posts-view';

import { IBlogPostProps } from 'src/types/blog';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Posts - National Policy Forum',
};

export default async function TravelPostsPage() {
  const posts: IBlogPostProps[] = await getPosts();

  const categories: Category[] = await getCategories();

  return <TravelPostsView posts={posts} categories={categories} />;
}
