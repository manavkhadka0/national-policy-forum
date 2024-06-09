
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { bgGradient } from 'src/theme/css';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import Iconify from 'src/components/iconify';

import { IDonationContentProps } from 'src/types/job';

// ----------------------------------------------------------------------

type Props = {
  donation: IDonationContentProps;
};

export const donation_mock = {
  id: 1,
  title: 'Donation for Breast Cancer in America',
  description: "Breast cancer is a disease in which abnormal breast cells grow out of control and form tumours. If left unchecked, the tumours can spread throughout the body and become fatal.Breast cancer cells begin inside the milk ducts and/ or the milk-producing lobules of the breast.The earliest form(in situ) is not life - threatening.Cancer cells can spread into nearby breast tissue(invasion).This creates tumours that cause lumps or thickening.Invasive cancers can spread to nearby lymph nodes or other organs(metastasize).Metastasis can be fatal.Treatment is based on the person, the type of cancer and its spread.Treatment combines surgery, radiation therapy and medications."
}

export default function DonationHero({ donation }: Props) {
  const theme = useTheme();


  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: 'https://images.pexels.com/photos/6995109/pexels-photo-6995109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }),
        pt: 5,
        pb: 10,
      }}
    >
      <Container>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Donations', href: paths.career.jobs },
            { name: 'Donation' },
          ]}
          sx={{
            mb: { xs: 5, md: 8 },
            '& a': {
              color: 'common.white',
            },
          }}
        />

        <Stack
          spacing={5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Stack spacing={{ xs: 3, md: 2 }} sx={{ color: 'common.white' }}>
            <Typography variant="h3" component="h1">
              {donation.title}
            </Typography>

            <Stack spacing={3} direction={{ xs: 'column', md: 'row' }} sx={{ opacity: 0.48 }}>


              <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                <Iconify icon="carbon:view" sx={{ mr: 1 }} /> Total Donations {100}
              </Stack>


            </Stack>
          </Stack>

          <Stack
            spacing={2}
            direction="row"
            alignItems="flex-start"
            sx={{ width: 1, maxWidth: 340 }}
          >
            <Stack spacing={2} alignItems="center" sx={{ width: 1 }}>
              <Button sx={{ px: 12 }} variant="contained" size="large" color="primary">
                Donate Now
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
