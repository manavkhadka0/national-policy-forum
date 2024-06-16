'use client';

import { Slide } from 'yet-another-react-lightbox';

import NpfLatestPost from 'src/sections/blog/npf/npf-landing-posts';
import TravelNewsletter from 'src/sections/_travel/travel-newsletter';
import NpfLatestEvents from 'src/sections/blog/npf/npf-latest-events';
import { Faq } from 'src/sections/_marketing/landing/marketing-landing-faqs';
import NpfLatestPublications from 'src/sections/blog/npf/npf-latest-publications';

import { IBrandProps } from 'src/types/brand';
import { IOurTeamProps } from 'src/types/team';
import { ITestimonialProps } from 'src/types/testimonial';
import { IBlogPostProps, IPublicationProps } from 'src/types/blog';

import Hero from '../landing/hero';
import NpfFaqs from '../landing/faqs';
import OurTeam from '../landing/our-team';
import OurClients from '../landing/our-clients';
import OurGallery from '../landing/our-gallery';
import NpfTestimonial from '../testimonial/npf-testimonial';

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

export default function LandingView({
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
      <Hero articles={featured_posts} />

      <NpfLatestPost posts={latest_posts} />

      <NpfLatestEvents events={latest_events} />

      <NpfLatestPublications publications={latest_publications} />

      <NpfTestimonial testimonials={testimonials} />

      <NpfFaqs faqs={faqs} />

      <OurTeam members={members} />

      <OurClients clients={clients} />

      <OurGallery galleries={galleries} />

      <TravelNewsletter />
    </>
  );
}