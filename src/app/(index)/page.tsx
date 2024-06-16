import { Slide } from 'yet-another-react-lightbox';

import { getFaqs } from 'src/actions/faq';
import { getClients } from 'src/actions/clients';
import { getGallery } from 'src/actions/gallery';
import { getTeamMembers } from 'src/actions/team';
import { getTestimonials } from 'src/actions/testimonials';
import { getLatestPosts, getFeaturedPosts } from 'src/actions/post';

import { Faq } from 'src/sections/_marketing/landing/marketing-landing-faqs';
import TravelLandingView from 'src/sections/_travel/view/travel-landing-view';

import { IBrandProps } from 'src/types/brand';
import { IOurTeamProps } from 'src/types/team';
import { IBlogPostProps, IPublicationProps } from 'src/types/blog';
import { ITestimonialProps } from 'src/types/testimonial';
import { getLatestEvent } from 'src/actions/events';
import { getLatestPublication } from 'src/actions/publications';

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
  const latest_events: IPublicationProps[] = await getLatestEvent();
  const latest_publications: IPublicationProps[] = await getLatestPublication();
  const members: IOurTeamProps[] = await getTeamMembers();
  const clients: IBrandProps[] = await getClients();
  const gallery: Slide[] = await getGallery();

  return (
    <TravelLandingView
      faqs={faqs}
      testimonials={testimonials}
      featured_posts={featured_posts}
      latest_posts={latest_posts}
      members={members}
      latest_events={latest_events}
      latest_publications={latest_publications}
      clients={clients}
      galleries={gallery}
    />
  );
}
