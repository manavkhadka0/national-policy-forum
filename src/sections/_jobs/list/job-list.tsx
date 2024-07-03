import Box from '@mui/material/Box';

import { IJobProps } from 'src/types/job';

import CareerJobItem from './job-item';
import CareerJobItemSkeleton from './job-item-skeleton';

// ----------------------------------------------------------------------

type Props = {
  jobs: IJobProps[];
  loading?: boolean;
};

export default function JobList({ jobs, loading }: Props) {
  return (
    <Box
      sx={{
        columnGap: 4,
        display: 'grid',
        rowGap: { xs: 4, md: 5 },
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        },
      }}
    >
      {(loading ? [...Array(9)] : jobs).map((job, index) =>
        job ? <CareerJobItem key={job.id} job={job} /> : <CareerJobItemSkeleton key={index} />
      )}
    </Box>
  );
}
