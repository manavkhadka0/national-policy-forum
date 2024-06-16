import Box from '@mui/material/Box';

import { IPublicationProps } from 'src/types/blog';

import NpfEventItem from './npf-event-item';

// ----------------------------------------------------------------------

type Props = {
  events: IPublicationProps[];
};

export default function NpfEvents({ events }: Props) {
  return (
    <>
      <Box
        sx={{
          columnGap: 4,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {events.slice(0, 8).map((event) => (
          <NpfEventItem key={event.slug} event={event} />
        ))}
      </Box>

      {/* <Pagination
        count={10}
        color="primary"
        sx={{
          my: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      /> */}
    </>
  );
}
