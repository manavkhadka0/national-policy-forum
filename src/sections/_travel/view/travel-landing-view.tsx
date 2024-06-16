'use client';

import { Slide } from 'yet-another-react-lightbox';

import OurTeam from 'src/sections/_landing/our-team';
import OurClients from 'src/sections/_landing/our-clients';
import OurGallery from 'src/sections/_landing/our-gallery';
import LatestEvents from 'src/sections/blog/event/latest-event';
import LatestPublications from 'src/sections/blog/publication/latest-publication';
import MarketingTestimonial from 'src/sections/_marketing/testimonial/marketing-testimonial';
import MarketingLandingFaqs, { Faq } from 'src/sections/_marketing/landing/marketing-landing-faqs';

import { IBrandProps } from 'src/types/brand';
import { IOurTeamProps } from 'src/types/team';
import { ITestimonialProps } from 'src/types/testimonial';
import { IBlogPostProps, IPublicationProps } from 'src/types/blog';

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
  latest_events: IPublicationProps[];
  latest_publications: IPublicationProps[];
};

export default function TravelLandingView({
  faqs,
  testimonials,
  featured_posts,
  members,
  clients,
  galleries,
  latest_posts,
  latest_events,
  latest_publications,
}: TravelLandingViewProps) {
  return (
    <>
      <TravelLandingHero articles={featured_posts} />

      <BlogTravelLandingLatestPosts posts={latest_posts} />

      <LatestEvents posts={latest_events} />

      <LatestPublications posts={latest_publications} />

      <MarketingTestimonial testimonials={testimonials} />

      <MarketingLandingFaqs faqs={faqs} />

      <OurTeam members={members} />

      <OurClients clients={clients} />

      <OurGallery galleries={galleries} />

      <TravelNewsletter />
    </>
  );
}
