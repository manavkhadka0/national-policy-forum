'use client';

import Container from '@mui/material/Container';

import { TeamMemberRoles } from 'src/actions/team';

import { IOurTeamProps } from 'src/types/team';

import OurTeam from '../../landing/our-team';
import OurTeamDetailItem from './our-team-detail-item';

type OurTeamViewProps = {
  teams: IOurTeamProps[];
  member: IOurTeamProps;
  roles: TeamMemberRoles[];
};

export default function OurTeamDetailView({ teams, roles, member }: OurTeamViewProps) {
  return (
    <>
      <OurTeamDetailItem member={member} />
      <Container>
        <OurTeam members={teams} roles={roles} />
      </Container>
    </>
  );
}
