'use client';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { TeamMemberRoles } from 'src/actions/team';

import { IOurTeamProps } from 'src/types/team';

import OurTeamItem from './our-team-item';

// ----------------------------------------------------------------------

type Props = {
  members: IOurTeamProps[];
  roles: TeamMemberRoles[];
  seletecRoleSlug?: string;
};

export default function OurTeam({ members, seletecRoleSlug, roles: rolesFetched }: Props) {
  const [tab, setTab] = useState(
    rolesFetched.find((role) => role.slug === seletecRoleSlug)?.name || 'All'
  );

  const roles = ['All', ...Array.from(new Set(rolesFetched.map((role) => role.name)))];

  const filtered = applyFilter(members, tab);

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  }, []);

  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Our Team
      </Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
          color: 'text.secondary',
        }}
      >
        Our dedicated team from across Nepal brings together a wealth of expertise and
        accomplishments in research, analysis, and publishing. At NPF, we are committed to driving
        informed public discourse and fostering active citizenship across Nepal.
      </Typography>

      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        sx={{ my: 5 }}
        allowScrollButtonsMobile
        onChange={handleChangeTab}
      >
        {roles.map((role) => (
          <Tab key={role} value={role} label={role} />
        ))}
      </Tabs>

      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          alignItems: 'center',
        }}
      >
        {filtered.map((member) => (
          <OurTeamItem key={member.id} member={member} />
        ))}
      </Box>
    </Container>
  );
}

function applyFilter(arr: IOurTeamProps[], roles: string) {
  if (roles !== 'All') {
    arr = arr.filter((project) => project.role === roles);
  }
  return arr;
}
