'use client';

import { useEffect } from 'react';

import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';

import { _jobs } from 'src/_mock';

import CareerNewsletter from 'src/sections/_career/career-newsletter';

import JobList from '../list/job-list';

// ----------------------------------------------------------------------

export default function JobsView() {
  const loading = useBoolean(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  return (
    <>
      <Container sx={{ py: 6 }}>
        <JobList jobs={_jobs} loading={loading.value} />
      </Container>

      <CareerNewsletter />
    </>
  );
}
