'use-client';

import { getSinglePost } from 'src/actions/faq';
import { Tags, getTags } from 'src/actions/tag';

import TravelPostView from 'src/sections/_travel/view/travel-post-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: `Post - National Policy Forum`,
};

export default async function TravelPostPage({ params }: { params: { id: string } }) {
  const post = await getSinglePost(params.id);
  const tags: Tags[] = await getTags();

  return <TravelPostView tags={tags} post={post} />;
}
