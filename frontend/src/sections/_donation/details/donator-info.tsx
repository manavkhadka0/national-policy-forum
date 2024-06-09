import { Divider } from '@mui/material';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

import { IDonationDataProps, IJobProps } from 'src/types/job';

// ----------------------------------------------------------------------

type Props = {
  donationData: IDonationDataProps[];
};

export default function DonatorInfo({ donationData }: Props) {
  return (
    <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, bgcolor: 'background.default' }}>
      <Stack spacing={2} direction="row" alignItems="flex-start">
        <Stack>
          <Typography variant="subtitle1" style={{ fontWeight: 'bolder', paddingBottom: 8 }}>Highest Donation </Typography>
          <Divider />
        </Stack>
      </Stack>
      <Stack>
        <Typography variant="h3" alignItems='center' sx={{ pt: 2, pb: 1 }} ><span style={{ color: 'green' }}>$   </span>30000</Typography>
      </Stack>
      <Stack spacing={2} direction="row" alignItems="center">
        <Image
          alt={donationData[0].name}
          src={donationData[0].image}
          sx={{ width: 48, height: 48, borderRadius: 1 }}
        />

        <Stack spacing={-0.5}>

          <Typography variant="h5" sx={{ color: 'common.black' }}>{donationData[0].name}</Typography>
          <Link variant="body2" sx={{ color: 'text.secondary', pb: 1 }}>
            <Typography variant='body2' style={{ fontWeight: 'bold' }}>
              dummyemail@email.com            </Typography> </Link>
        </Stack>

      </Stack>
      <Typography variant='caption' sx={{ color: 'text.disabled' }}>
        I like donations so i am donating  I like donations so i am donating  I like donations so i am donating  I like donations so i am donating   </Typography>
    </Paper>
  );
}
