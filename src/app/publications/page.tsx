import { getPublications } from 'src/actions/publications';
import { getTestimonials } from 'src/actions/testimonials';
import { getCategoriesNameOnly } from 'src/actions/categories';

import PublicationsView from 'src/sections/_npf/view/publications-view';

import { IPublicationProps } from 'src/types/blog';
import { ITestimonialProps } from 'src/types/testimonial';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Home - National Policy Forum',
};

export const revalidate = 10;

export default async function TravelLandingPage() {
  const categories: string[] = await getCategoriesNameOnly();
  const publications: IPublicationProps[] = await getPublications();
  const testimonials: ITestimonialProps[] = await getTestimonials();

  return (
    <PublicationsView
      category={categories}
      publications={publications}
      testimonials={testimonials}
    />
  );
}
