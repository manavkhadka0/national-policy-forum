import { getTags } from 'src/actions/tag';
import { getFeaturedPosts } from 'src/actions/post';
import { Category, getCategories, getCategoriesNameOnly } from 'src/actions/categories';

import PostsView from 'src/sections/_npf/view/posts-view';

import { IBlogPostProps } from 'src/types/blog';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Posts - National Policy Forum',
};

export const revalidate = 10;

export default async function TravelPostsPage() {
  const posts: IBlogPostProps[] = await getFeaturedPosts();

  const categories: Category[] = await getCategories();

  const categorisName: string[] = await getCategoriesNameOnly();

  const tags: string[] = await getTags();

  return (
    <PostsView posts={posts} categories={categories} categoriesName={categorisName} tags={tags} />
  );
}
