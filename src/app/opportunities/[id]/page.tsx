'use-client';

import { getTags } from 'src/actions/tag';
import { getCategoriesNameOnly } from 'src/actions/categories';
import { getLatestOpportunity, getSingleOpportunity } from 'src/actions/opportunities';

import OpportunityView from 'src/sections/_npf/view/opportunity-view';

import { IBlogPostProps } from 'src/types/blog';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }: { params: { id: string } }) {
  const opportunity: IBlogPostProps = await getSingleOpportunity(params.id);

  return {
    title: `${opportunity.title} | National Policy Forum`,
    description: opportunity.description,
    image: opportunity.hero,
    openGraph: {
      title: `${opportunity.title} | National Policy Forum`,
      description: opportunity.description,
      images: [opportunity.hero, opportunity.cover],
      type: 'article',
      publishedTime: opportunity.created_at,
      modifiedTime: opportunity.updated_at,
      tags: opportunity.tags,
      authors: [opportunity.author],
    },
  };
}

export const revalidate = 10;

export default async function OpportunityPage({ params }: { params: { id: string } }) {
  const opportunity = await getSingleOpportunity(params.id);
  const recentOpportunity = await getLatestOpportunity();
  const tags: string[] = await getTags();
  const categories: string[] = await getCategoriesNameOnly();

  return (
    <OpportunityView
      categories={categories}
      tags={tags}
      post={opportunity}
      recentPosts={recentOpportunity}
    />
  );
}
