import { getFaqs } from 'src/actions/faq';
import { getClients } from 'src/actions/clients';
import { getTeamMembers } from 'src/actions/team';
import { getTestimonials } from 'src/actions/testimonials';
import { getLatestPosts, getFeaturedPosts } from 'src/actions/post';

import { Faq } from 'src/sections/_marketing/landing/marketing-landing-faqs';
import TravelLandingView from 'src/sections/_travel/view/travel-landing-view';

import { IBrandProps } from 'src/types/brand';
import { IOurTeamProps } from 'src/types/team';
import { IBlogPostProps } from 'src/types/blog';
import { ITestimonialProps } from 'src/types/testimonial';
import { getGallery } from 'src/actions/gallery';
import { IGalleryProps } from 'src/types/gallery';

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
  const members: IOurTeamProps[] = await getTeamMembers();
  const clients: IBrandProps[] = await getClients();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const gallery: IGalleryProps[] = await getGallery();

  return (
    <TravelLandingView
      faqs={faqs}
      testimonials={testimonials}
      featured_posts={featured_posts}
      latest_posts={latest_posts}
      members={members} 
      clients={clients} 
      galleries={gallery}   />
  );
}
