import { getPublications } from 'src/actions/publications';
import { getTestimonials } from 'src/actions/testimonials';
import { getCategoriesNameOnly } from 'src/actions/categories';

import MarketingCaseStudiesView from 'src/sections/_marketing/view/marketing-case-studies-view';

import { IPublicationProps } from 'src/types/blog';
import { ITestimonialProps } from 'src/types/testimonial';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Home - National Policy Forum',
};

export const revalidate = 10;

export default async function TravelLandingPage() {

  const categories: string[] = await getCategoriesNameOnly();
  const publications: IPublicationProps[] = await getPublications ();
  const testimonials: ITestimonialProps[] = await getTestimonials();

  return <MarketingCaseStudiesView category={categories} publications={publications} testimonials={testimonials}/>;
}
