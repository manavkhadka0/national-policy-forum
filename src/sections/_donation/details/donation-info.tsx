import Image from 'next/image';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';

import { IDonationDataProps } from 'src/types/job';

// ----------------------------------------------------------------------

type Props = {
  donationData: IDonationDataProps[];
};

export default function DonationInfo({ donationData }: Props) {
  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Stack spacing={2} direction="row" alignItems="flex-start">
          <Stack>
            <Typography variant="subtitle1" style={{ fontWeight: 'bolder', paddingBottom: 8 }}>
              Top Donations{' '}
            </Typography>
            <Divider />
          </Stack>
        </Stack>

        {donationData.slice(1, 6).map((item, index) => (
          <Stack key={index} spacing={2} direction="row" alignItems="center">
            <Image
              alt={item.name}
              src={item.image}
              width={48}
              height={48}
              style={{ borderRadius: 8 }}
            />
            <Stack spacing={-0.5}>
              <Typography variant="subtitle1"> {item.name} </Typography>
              <Typography
                variant="caption"
                style={{ fontWeight: 'normal' }}
                sx={{ color: 'text.disabled', width: 140, overflow: 'hidden' }}
              >
                {item.email}{' '}
              </Typography>
            </Stack>
            <Stack justifyContent="flex-start" style={{ fontWeight: 'bolder' }} sx={{ ml: 2 }}>
              ${item.amount}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
