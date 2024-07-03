'use client';

import { useEffect } from 'react';

import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';

import CareerNewsletter from 'src/sections/_career/career-newsletter';

import { IJobProps } from 'src/types/job';

import JobList from '../list/job-list';

// ----------------------------------------------------------------------

type JobsViewProps = {
  jobs: IJobProps[];
};

export default function JobsView({ jobs }: JobsViewProps) {
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
        <JobList jobs={jobs} loading={loading.value} />
      </Container>

      <CareerNewsletter />
    </>
  );
}
