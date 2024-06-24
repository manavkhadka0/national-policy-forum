import { getTestimonials } from 'src/actions/testimonials';
import { OpportunityType, getOpportunities, getOpportunityType } from 'src/actions/opportunities';

import OpportunitiesView from 'src/sections/_npf/view/opportunities-view';

import { IBlogPostProps } from 'src/types/blog';
import { ITestimonialProps } from 'src/types/testimonial';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Opportunities - National Policy Forum',
};

export const revalidate = 10;

export default async function OpportunitiesPage() {
  const opportunityType: OpportunityType[] = await getOpportunityType();
  const opportunities: IBlogPostProps[] = await getOpportunities();
  const testimonials: ITestimonialProps[] = await getTestimonials();
  return (
    <OpportunitiesView
      type={null}
      category={opportunityType}
      opportunities={opportunities}
      testimonials={testimonials}
    />
  );
}
