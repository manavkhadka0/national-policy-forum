'use client';

import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { SplashScreen } from 'src/components/loading-screen';

import PostSocialsShare from 'src/sections/blog/common/post-socials-share';

import { INPFJobProps } from 'src/types/job';

import JobDetailsInfo from '../details/job-details-info';
import JobDetailsHero from '../details/job-details-hero';
import JobDetailsSummary from '../details/job-details-summary';

// ----------------------------------------------------------------------

type JobViewProps = {
  job: INPFJobProps;
};

export default function JobView({ job }: JobViewProps) {
  const mdUp = useResponsive('up', 'md');

  const loading = useBoolean(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  if (loading.value) {
    return <SplashScreen />;
  }

  return (
    <>
      <JobDetailsHero job={job} />

      <Container
        sx={{
          overflow: 'hidden',
          pt: { xs: 5, md: 10 },
          pb: 10,
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }}>
          {!mdUp && (
            <Grid xs={12} md={5} lg={4}>
              <JobDetailsInfo job={job} />
            </Grid>
          )}

          <Grid xs={12} md={7} lg={8}>
            <JobDetailsSummary job={job} />

            <Divider sx={{ my: 5 }} />

            <Stack direction="row" flexWrap="wrap" sx={{ mt: 5 }}>
              <PostSocialsShare longButtons />
            </Stack>
          </Grid>

          <Grid xs={12} md={5} lg={4}>
            <Stack spacing={5}>{mdUp && <JobDetailsInfo job={job} />}</Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
