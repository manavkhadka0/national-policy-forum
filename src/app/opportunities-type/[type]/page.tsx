import { getTestimonials } from 'src/actions/testimonials';
import { OpportunityType, getOpportunities, getOpportunityType } from 'src/actions/opportunities';

import OpportunitiesView from 'src/sections/_npf/view/opportunities-view';

import { IBlogPostProps } from 'src/types/blog';
import { ITestimonialProps } from 'src/types/testimonial';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }: { params: { type: string } }) {
  return {
    title: `${params.type} | National Policy Forum`,
    description: `Opportunities for ${params.type} | National Policy Forum`,
  };
}

export const revalidate = 10;

export default async function OpportunitiesPage({ params }: { params: { type: string } }) {
  const categories: OpportunityType[] = await getOpportunityType();
  const opportunities: IBlogPostProps[] = await getOpportunities();
  const testimonials: ITestimonialProps[] = await getTestimonials();
  return (
    <OpportunitiesView
      type={decodeURI(params.type)}
      category={categories}
      opportunities={opportunities}
      testimonials={testimonials}
    />
  );
}
