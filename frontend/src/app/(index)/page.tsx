import { getFaqs } from 'src/actions/faq';
import { getTestimonials } from 'src/actions/testimonials';
import { getLatestPosts, getFeaturedPosts } from 'src/actions/post';

import { Faq } from 'src/sections/_marketing/landing/marketing-landing-faqs';
import TravelLandingView from 'src/sections/_travel/view/travel-landing-view';

import { IBlogPostProps } from 'src/types/blog';
import { ITestimonialProps } from 'src/types/testimonial';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Home - National Policy Forum',
};

export const revalidate = 10;

export default async function TravelLandingPage() {
  const faqs: Faq[] = await getFaqs();
  const testimonials: ITestimonialProps[] = await getTestimonials();
  const featured_posts: IBlogPostProps[] = await getFeaturedPosts();
  const latest_posts: IBlogPostProps[] = await getLatestPosts();

  return (
    <TravelLandingView
      faqs={faqs}
      testimonials={testimonials}
      featured_posts={featured_posts}
      latest_posts={latest_posts}
    />
  );
}
