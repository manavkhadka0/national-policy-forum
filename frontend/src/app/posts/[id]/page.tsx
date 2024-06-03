'use-client';

import { getSinglePost } from 'src/actions/faq';

import TravelPostView from 'src/sections/_travel/view/travel-post-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: `Post - National Policy Forum`,
};

export default async function TravelPostPage({ params }: { params: { id: string } }) {
  const post = await getSinglePost(params.id);

  return <TravelPostView post={post} />;
}
