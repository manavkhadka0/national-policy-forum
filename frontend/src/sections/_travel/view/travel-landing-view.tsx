'use client';

import MarketingTestimonial from 'src/sections/_marketing/testimonial/marketing-testimonial';
import MarketingLandingFaqs, { Faq } from 'src/sections/_marketing/landing/marketing-landing-faqs';

import { IBlogPostProps } from 'src/types/blog';
import { ITestimonialProps } from 'src/types/testimonial';

import TravelNewsletter from '../travel-newsletter';
import TravelLandingHero from '../landing/travel-landing-hero';
import BlogTravelLandingLatestPosts from '../../blog/travel/travel-landing-posts';

// ----------------------------------------------------------------------
type TravelLandingViewProps = {
  faqs: Faq[];
  testimonials: ITestimonialProps[];
  posts: IBlogPostProps[];
};

export default function TravelLandingView({ faqs, testimonials, posts }: TravelLandingViewProps) {
  return (
    <>
      <TravelLandingHero articles={posts} />

      <BlogTravelLandingLatestPosts posts={posts} />

      <MarketingTestimonial testimonials={testimonials} />

      <MarketingLandingFaqs faqs={faqs} />

      <TravelNewsletter />
    </>
  );
}
