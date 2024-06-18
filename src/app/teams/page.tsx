import { getTeamMembers, getTeamMembersRoles } from 'src/actions/team';

import OurTeamView from 'src/sections/_npf/teams/view/our-team-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Our Team - National Policy Forum',
};

export const revalidate = 10;

export default async function OurTeamPage() {
  const teams = await getTeamMembers();
  const roles = await getTeamMembersRoles();
  return <OurTeamView teams={teams} roles={roles} />;
}
