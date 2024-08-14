'use client';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { TeamMemberRoles } from 'src/actions/team';

import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

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

  const mdUp = useResponsive('up', 'sm');

  const carousel = useCarousel({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...CarouselDots({
      sx: {
        mt: { xs: 8, md: 10 },
      },
    }),
  });

  const roles = ['All', ...Array.from(new Set(rolesFetched.map((role) => role.name)))];

  const filtered = applyFilter(members, tab);

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  }, []);

  return (
    <Container
      sx={{
        py: { xs: 8, md: 8 },
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

      {mdUp && (
        <>
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
        </>
      )}

      {!mdUp && (
        <CarouselArrows
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          leftButtonProps={{ sx: { opacity: { xs: 1, md: 0 } } }}
          rightButtonProps={{ sx: { opacity: { xs: 1, md: 0 } } }}
        >
          <Grid container spacing={10} justifyContent="center">
            <Grid xs={12} md={8}>
              <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                {members.map((member) => (
                  <OurTeamItem key={member.id} member={member} />
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </CarouselArrows>
      )}
    </Container>
  );
}

function applyFilter(arr: IOurTeamProps[], roles: string) {
  if (roles !== 'All') {
    arr = arr.filter((project) => project.role === roles);
  }
  return arr;
}
