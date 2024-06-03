import { getFaqs, getPosts, getTestimonials } from 'src/actions/faq';

import { Faq } from 'src/sections/_marketing/landing/marketing-landing-faqs';
import TravelLandingView from 'src/sections/_travel/view/travel-landing-view';

import { IBlogPostProps } from 'src/types/blog';
import { ITestimonialProps } from 'src/types/testimonial';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Home - National Policy Forum',
};

export default async function TravelLandingPage() {
  const faqs: Faq[] = await getFaqs();
  const testimonials: ITestimonialProps[] = await getTestimonials();
  const posts: IBlogPostProps[] = await getPosts();

  return <TravelLandingView faqs={faqs} testimonials={testimonials} posts={posts} />;
}
