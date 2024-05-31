'use-client';

import { useGetPost } from 'src/api/blog';

import TravelPostView from 'src/sections/_travel/view/travel-post-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: `Post - National Policy Forum`,
};

export default function TravelPostPage({ params }: { params: { id: string } }) {
  const { post } = useGetPost(params.id);

  return <TravelPostView post={post} />;
}
