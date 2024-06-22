import { getClients } from 'src/actions/clients';
import { getLatestPosts } from 'src/actions/post';
import { getTestimonials } from 'src/actions/testimonials';
import { getTeamMembers, getTeamMembersRoles } from 'src/actions/team';

import AboutView from 'src/sections/_npf/view/elearning-about-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'About National Policy Forum - National Policy Forun',
};

export default async function ContactPage() {
  const clients = await getClients();
  const latest_posts = await getLatestPosts();
  const members = await getTeamMembers();
  const roles = await getTeamMembersRoles();
  const testimonials = await getTestimonials();

  return (
    <AboutView
      clients={clients}
      latest_posts={latest_posts}
      members={members}
      roles={roles}
      testimonials={testimonials}
    />
  );
}
