import { getFaqs, getPosts, getTestimonials } from 'src/actions/faq';

import { Faq } from 'src/sections/_marketing/landing/marketing-landing-faqs';
import TravelLandingView from 'src/sections/_travel/view/travel-landing-view';

import { ITestimonialProps } from 'src/types/testimonial';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Home - National Policy Forum',
};

export default async function TravelLandingPage() {
  const faqs: Faq[] = await getFaqs();
  const testimonials: ITestimonialProps[] = await getTestimonials();
  const posts = await getPosts();

  return <TravelLandingView faqs={faqs} testimonials={testimonials} posts={posts} />;
}
