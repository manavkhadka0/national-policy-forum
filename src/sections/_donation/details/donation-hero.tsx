'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { bgGradient } from 'src/theme/css';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import PostSocialsShare from 'src/sections/blog/common/post-socials-share';

import { IDonationContentProps } from 'src/types/job';

// ----------------------------------------------------------------------

type Props = {
  donation: IDonationContentProps;
};

export default function DonationHero({ donation }: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl:
            'https://images.pexels.com/photos/6995109/pexels-photo-6995109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
            { name: `${donation.title}` },
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

            <PostSocialsShare longButtons={false} />
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
