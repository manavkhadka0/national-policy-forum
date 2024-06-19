import { getTeamMembers, getTeamMembersRoles } from 'src/actions/team';

import OurTeam from 'src/sections/_npf/landing/our-team';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }: { params: { role: string } }) {
  return {
    title: `${params.role} | National Policy Forum`,
    description: `Team description for ${params.role} | National Policy Forum`,
  };
}

export const revalidate = 10;

export default async function PostDetailPage({ params }: { params: { role: string } }) {
  const teams = await getTeamMembers();
  const roles = await getTeamMembersRoles();

  return <OurTeam members={teams} roles={roles} seletecRoleSlug={decodeURI(params.role)} />;
}
