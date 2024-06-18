'use client';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { IOurTeamProps } from 'src/types/team';

import OurTeamItem from './our-team-item';

// ----------------------------------------------------------------------

type Props = {
  members: IOurTeamProps[];
  roles: string[];
  seletecRole?: string;
};

export default function OurTeam({ members, seletecRole, roles: rolesFetched }: Props) {
  const [tab, setTab] = useState(seletecRole || 'All');

  const roles = ['All', ...Array.from(new Set(rolesFetched))];

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
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
          color: 'text.secondary',
        }}
      >
        Dedicated Experts Driving Change
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
            md: 'repeat(4, 1fr)',
          },
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
