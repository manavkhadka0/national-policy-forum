'use-client';

import { getTags } from 'src/actions/tag';
import { getCategoriesNameOnly } from 'src/actions/categories';
import { getLatestPublication, getSinglePublication } from 'src/actions/publications';

import TravelPostView from 'src/sections/_travel/view/travel-post-view';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }: { params: { id: string } }) {
    const publication = await getSinglePublication(params.id);

    return {
        title: `${publication.title} | National Policy Forum`,
        description: publication.description,
        image: publication.image,
    };
}

export default async function TravelPostPage({ params }: { params: { id: string } }) {
    const post = await getSinglePublication(params.id);
    const recentPublication = await getLatestPublication();
    const tags: string[] = await getTags();
    const categories: string[] = await getCategoriesNameOnly();

    return (
        <TravelPostView categories={categories} tags={tags} post={post} recentPosts={recentPublication} />
    );
}
