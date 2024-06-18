'use-client';

import { getTags } from 'src/actions/tag';
import { getCategoriesNameOnly } from 'src/actions/categories';
import { getSinglePost, getLatestPosts } from 'src/actions/post';

import PostView from 'src/sections/_npf/view/post-view';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getSinglePost(params.id);

  return {
    title: `${post.title} | National Policy Forum`,
    description: post.description,
    image: post.hero,
  };
}

export const revalidate = 10;

export default async function PostDetailPage({ params }: { params: { id: string } }) {
  const post = await getSinglePost(params.id);
  const recentPosts = await getLatestPosts();
  const tags: string[] = await getTags();
  const categories: string[] = await getCategoriesNameOnly();

  return <PostView categories={categories} tags={tags} post={post} recentPosts={recentPosts} />;
}
