import Stack from '@mui/material/Stack';

import Markdown from 'src/components/markdown';

import { IDonationContentProps } from 'src/types/job';

// ----------------------------------------------------------------------

type Props = {
  donationContent:IDonationContentProps
};

export default function DonationDetailsSummary({ donationContent }: Props) {
  const { content } = donationContent;

  return (
    <Stack spacing={5}>
      <Markdown content={content} />
    </Stack>
  );
}
