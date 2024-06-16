import { getFeaturedPosts } from 'src/actions/post';
import { Category, getCategories } from 'src/actions/categories';

import PostsView from 'src/sections/_posts/view/posts-view';

import { IBlogPostProps } from 'src/types/blog';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Posts - National Policy Forum',
};

export const revalidate = 10;

export default async function TravelPostsPage() {
  const posts: IBlogPostProps[] = await getFeaturedPosts();

  const categories: Category[] = await getCategories();

  return <PostsView posts={posts} categories={categories} />;
}
