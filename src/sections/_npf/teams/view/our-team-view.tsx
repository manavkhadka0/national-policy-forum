import Container from '@mui/material/Container';

import { TeamMemberRoles } from 'src/actions/team';

import { IOurTeamProps } from 'src/types/team';

import OurTeam from '../../landing/our-team';

type OurTeamViewProps = {
  teams: IOurTeamProps[];
  roles: TeamMemberRoles[];
};

export default function OurTeamView({ teams, roles }: OurTeamViewProps) {
  return <OurTeam members={teams} roles={roles} />;
}
