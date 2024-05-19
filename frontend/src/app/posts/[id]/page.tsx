import { _marketingPosts, } from 'src/_mock';

import TravelPostView from 'src/sections/_travel/view/travel-post-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: `Post - National Policy Forum`,
};

export default function TravelPostPage({ params }: { params: { id: string } }) {

  const fetchedPost = _marketingPosts.filter((post) => post.id === params.id)[0];

  return <TravelPostView post={fetchedPost} />;
}
