import { Category, getCategories } from 'src/actions/categories';
import { getAllPosts, getLatestPosts, getFeaturedPosts } from 'src/actions/post';

import PostsView from 'src/sections/_npf/view/posts-view';

import { IBlogPostProps } from 'src/types/blog';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Posts - National Policy Forum',
};

export const revalidate = 10;

export default async function TravelPostsPage() {
  const featuredPosts: IBlogPostProps[] = await getFeaturedPosts();

  const recentPosts: IBlogPostProps[] = await getLatestPosts();

  const posts: IBlogPostProps[] = await getAllPosts();
  const categories: Category[] = await getCategories();

  return (
    <PostsView
      posts={posts}
      featuredPosts={featuredPosts}
      recentPosts={recentPosts}
      categories={categories}
    />
  );
}
