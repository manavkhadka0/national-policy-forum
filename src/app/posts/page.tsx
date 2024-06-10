
import { Category, getCategories } from 'src/actions/categories';
import { getFeaturedPosts } from 'src/actions/post';
import TravelPostsView from 'src/sections/_travel/view/travel-posts-view';

import { IBlogPostProps } from 'src/types/blog';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Posts - National Policy Forum',
};

export default async function TravelPostsPage() {
  const posts: IBlogPostProps[] = await getFeaturedPosts();

  const categories: Category[] = await getCategories();

  return <TravelPostsView posts={posts} categories={categories} />;
}
