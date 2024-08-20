'use client';

import React, { useState, useCallback } from 'react';

import { Box, Tab, Tabs, Container, Typography } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import { TeamMemberRoles } from 'src/actions/team';

import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import { IOurTeamProps } from 'src/types/team';

import OurTeamItem from './our-team-item';

type Props = {
  members: IOurTeamProps[];
  roles: TeamMemberRoles[];
  selectedRoleSlug?: string;
};

export default function OurTeam({ members, selectedRoleSlug, roles: rolesFetched }: Props) {
  const [tab, setTab] = useState(
    rolesFetched.find((role) => role.slug === selectedRoleSlug)?.name || 'All'
  );

  const mdUp = useResponsive('up', 'sm');

  const carousel = useCarousel({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...CarouselDots({
      sx: {
        mt: { xs: 4, md: 5 },
      },
    }),
  });

  const roles = ['All', ...Array.from(new Set(rolesFetched.map((role) => role.name)))];

  const filtered = applyFilter(members, tab);

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, overflow: 'hidden' }}>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Our Team
      </Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          textAlign: 'center',
          mb: { xs: 4, md: 5 },
          color: 'text.secondary',
        }}
      >
        Our dedicated team from across Nepal brings together a wealth of expertise and
        accomplishments in research, analysis, and publishing. At NPF, we are committed to driving
        informed public discourse and fostering active citizenship across Nepal.
      </Typography>

      {mdUp ? (
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
              display: 'grid',
              gap: 3,
              gridTemplateColumns: {
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            {filtered.map((member) => (
              <OurTeamItem key={member.id} member={member} />
            ))}
          </Box>
        </>
      ) : (
        <Box sx={{ position: 'relative', mx: -2 }}>
          <CarouselArrows
            onNext={carousel.onNext}
            onPrev={carousel.onPrev}
            sx={{
              '& .arrow': {
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                '&.left': { left: 8 },
                '&.right': { right: 8 },
              },
            }}
          >
            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
              {members.map((member) => (
                <Box key={member.id} sx={{ px: 2 }}>
                  <OurTeamItem member={member} />
                </Box>
              ))}
            </Carousel>
          </CarouselArrows>
        </Box>
      )}
    </Container>
  );
}

function applyFilter(arr: IOurTeamProps[], role: string) {
  return role === 'All' ? arr : arr.filter((member) => member.role === role);
}
