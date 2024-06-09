'use client';

import { Slide } from 'yet-another-react-lightbox';

import OurTeam from 'src/sections/_landing/our-team';
import OurClients from 'src/sections/_landing/our-clients';
import OurGallery from 'src/sections/_landing/our-gallery';
import MarketingTestimonial from 'src/sections/_marketing/testimonial/marketing-testimonial';
import MarketingLandingFaqs, { Faq } from 'src/sections/_marketing/landing/marketing-landing-faqs';

import { IBrandProps } from 'src/types/brand';
import { IOurTeamProps } from 'src/types/team';
import { IBlogPostProps } from 'src/types/blog';
import { ITestimonialProps } from 'src/types/testimonial';

import TravelNewsletter from '../travel-newsletter';
import TravelLandingHero from '../landing/travel-landing-hero';
import BlogTravelLandingLatestPosts from '../../blog/travel/travel-landing-posts';

// ----------------------------------------------------------------------
type TravelLandingViewProps = {
  faqs: Faq[];
  testimonials: ITestimonialProps[];
  featured_posts: IBlogPostProps[];
  latest_posts: IBlogPostProps[];
  members: IOurTeamProps[];
  clients: IBrandProps[];
  galleries: Slide[];
};

export default function TravelLandingView({
  faqs,
  testimonials,
  featured_posts,
  members,
  clients,
  galleries,
  latest_posts,
}: TravelLandingViewProps) {
  return (
    <>
      <TravelLandingHero articles={featured_posts} />

      <BlogTravelLandingLatestPosts posts={latest_posts} />

      <MarketingTestimonial testimonials={testimonials} />

      <MarketingLandingFaqs faqs={faqs} />

      <OurTeam members={members} />

      <OurClients clients={clients} />

      <OurGallery galleries={galleries} />

      <TravelNewsletter />
    </>
  );
}
