'use client';

import { _travelPosts, _testimonials, _marketingPosts } from 'src/_mock';

import MarketingLandingFaqs from 'src/sections/_marketing/landing/marketing-landing-faqs';
import MarketingTestimonial from 'src/sections/_marketing/testimonial/marketing-testimonial';

import TravelNewsletter from '../travel-newsletter';
import TravelLandingHero from '../landing/travel-landing-hero';
import BlogTravelLandingLatestPosts from '../../blog/travel/travel-landing-posts';

// ----------------------------------------------------------------------

export default function TravelLandingView() {
  return (
    <>
      <TravelLandingHero articles={_marketingPosts.slice(0, 5)} />

      <BlogTravelLandingLatestPosts posts={_travelPosts.slice(2, 6)} />

      <MarketingTestimonial testimonials={_testimonials} />

      <MarketingLandingFaqs />

      <TravelNewsletter />
    </>
  );
}
