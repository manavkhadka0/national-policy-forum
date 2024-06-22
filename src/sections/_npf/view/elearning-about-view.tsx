'use client';

import { TeamMemberRoles } from 'src/actions/team';

import NpfLatestPosts from 'src/sections/blog/npf/npf-latest-posts';
import TravelNewsletter from 'src/sections/_travel/travel-newsletter';

import { IBrandProps } from 'src/types/brand';
import { IOurTeamProps } from 'src/types/team';
import { IBlogPostProps } from 'src/types/blog';
import { ITestimonialProps } from 'src/types/testimonial';

import About from '../about/about';
import OurTeam from '../landing/our-team';
import AboutHero from '../about/about-hero';
import OurClients from '../landing/our-clients';
import AboutCoreValues from '../about/core-values';
import NpfTestimonial from '../testimonial/npf-testimonial';

// ----------------------------------------------------------------------
type AboutProps = {
  members: IOurTeamProps[];
  clients: IBrandProps[];
  testimonials: ITestimonialProps[];
  latest_posts: IBlogPostProps[];
  roles: TeamMemberRoles[];
};

export default function AboutView({
  clients,
  latest_posts,
  members,
  testimonials,
  roles,
}: AboutProps) {
  return (
    <>
      <AboutHero />

      <About />

      <AboutCoreValues />

      <OurTeam members={members} roles={roles} />

      <OurClients clients={clients} />

      <NpfTestimonial testimonials={testimonials} />

      <NpfLatestPosts posts={latest_posts} />

      <TravelNewsletter />
    </>
  );
}
