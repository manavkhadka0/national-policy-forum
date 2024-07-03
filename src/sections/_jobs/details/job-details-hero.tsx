import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import { bgGradient } from 'src/theme/css';
import { WEBSITE_CONFIG } from 'src/config-global';

import Iconify from 'src/components/iconify';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { INPFJobProps } from 'src/types/job';

// ----------------------------------------------------------------------

type Props = {
  job: INPFJobProps;
};

export default function JobDetailsHero({ job }: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        pt: 5,
        pb: 10,
      }}
    >
      <Container>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Jobs', href: paths.careers },
            { name: job.title },
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
              {job.title}
            </Typography>

            <Stack spacing={3} direction={{ xs: 'column', md: 'row' }} sx={{ opacity: 0.48 }}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                <Iconify icon="carbon:user" sx={{ mr: 1 }} />
                <Link color="inherit">{job.level}</Link>
              </Stack>
              <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                <Iconify icon="carbon:increase-level" sx={{ mr: 1 }} />
                <Link color="inherit">{job.experience}</Link>
              </Stack>
              <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                <Iconify icon="carbon:baggage-claim" sx={{ mr: 1 }} />
                <Link color="inherit">{job.location}</Link>
              </Stack>
              <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                <Iconify icon="carbon:money" sx={{ mr: 1 }} />
                <Link color="inherit">{job.salary}</Link>
              </Stack>
            </Stack>
          </Stack>

          <Stack spacing={2} direction="row" alignItems="flex-start">
            <Stack spacing={2}>
              <Link
                href={`mailto:${WEBSITE_CONFIG.contact_email}?subject=Job Application: ${job.title}`}
                color="inherit"
              >
                <Button fullWidth variant="contained" size="large" color="primary">
                  Apply now
                </Button>
              </Link>

              <Typography variant="body2" sx={{ color: 'common.white' }}>
                {`Expiration date: `}
                <Box component="span" sx={{ color: 'error.main' }}>
                  {fDate(job.deadline)}
                </Box>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
