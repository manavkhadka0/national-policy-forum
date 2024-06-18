'use client';

import { Slide } from 'yet-another-react-lightbox';

import NpfFaqs from 'src/sections/_npf/landing/faqs';
import OurClients from 'src/sections/_npf/landing/our-clients';
import OurGallery from 'src/sections/_npf/landing/our-gallery';
import NpfLatestEvents from 'src/sections/blog/npf/npf-latest-events';
import NpfTestimonial from 'src/sections/_npf/testimonial/npf-testimonial';
import { Faq } from 'src/sections/_marketing/landing/marketing-landing-faqs';
import NpfLatestPublications from 'src/sections/blog/npf/npf-latest-publications';

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

      <NpfLatestEvents events={latest_events} />

      <NpfLatestPublications publications={latest_publications} />

      <NpfTestimonial testimonials={testimonials} />

      <NpfFaqs faqs={faqs} />

      {/* <OurTeam members={members} /> */}

      <OurClients clients={clients} />

      <OurGallery galleries={galleries} />

      <TravelNewsletter />
    </>
  );
}
