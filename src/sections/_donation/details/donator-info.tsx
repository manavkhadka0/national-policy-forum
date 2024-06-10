import Link from '@mui/material/Link';
import { Divider } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

import { IDonationDataProps } from 'src/types/job';
import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

type Props = {
  donationData: IDonationDataProps;
};

export default function DonatorInfo({ donationData }: Props) {
  return (
    <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, bgcolor: 'background.default' }}>
      <Stack spacing={2} direction="row" alignItems="flex-start">
        <Stack>
          <Typography variant="subtitle1" style={{ fontWeight: 'bolder', paddingBottom: 8 }}>
            Highest Donation{' '}
          </Typography>
          <Divider />
        </Stack>
      </Stack>
      <Stack>
        <Typography variant="h3" alignItems="center" sx={{ pt: 2, pb: 1 }}>
          {fCurrency(parseFloat(donationData.amount))}
        </Typography>
      </Stack>
      <Stack spacing={2} direction="row" alignItems="center">
        <Image
          alt={donationData.name}
          src={donationData.image}
          sx={{ width: 48, height: 48, borderRadius: 1 }}
        />

        <Stack spacing={-0.5}>
          <Typography variant="h5" sx={{ color: 'common.black' }}>
            {donationData.name}
          </Typography>
          <Link variant="body2" sx={{ color: 'text.secondary', pb: 1 }}>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              {donationData.email}
            </Typography>{' '}
          </Link>
        </Stack>
      </Stack>
      <Typography variant="caption" sx={{ color: 'text.disabled' }}>
        {donationData.message}
      </Typography>
    </Paper>
  );
}
