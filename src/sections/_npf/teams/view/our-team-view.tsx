import Container from '@mui/material/Container';

import { IOurTeamProps } from 'src/types/team';

import OurTeam from '../../landing/our-team';

type OurTeamViewProps = {
  teams: IOurTeamProps[];
  roles: string[];
};

export default function OurTeamView({ teams, roles }: OurTeamViewProps) {
  return (
    <Container>
      <OurTeam members={teams} roles={roles} />
    </Container>
  );
}
