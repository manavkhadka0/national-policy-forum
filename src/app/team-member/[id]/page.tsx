import { getTeamMembers, getTeamMemberDetail, getTeamMembersRoles } from 'src/actions/team';

import OurTeamDetailView from 'src/sections/_npf/teams/view/our-team-detail-view';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }: { params: { id: string } }) {
  const teamMemberDetail = await getTeamMemberDetail(params.id);
  return {
    title: `${teamMemberDetail.name} | National Policy Forum`,
    description: `About ${teamMemberDetail.name} | National Policy Forum`,
  };
}

export const revalidate = 10;

export default async function PostDetailPage({ params }: { params: { id: string } }) {
  const teams = await getTeamMembers();
  const teamMemberDetail = await getTeamMemberDetail(params.id);
  const roles = await getTeamMembersRoles();

  return <OurTeamDetailView teams={teams} roles={roles} member={teamMemberDetail} />;
}
