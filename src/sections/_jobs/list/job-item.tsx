import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

import Logo from 'src/components/logo';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

import { INPFJobProps } from 'src/types/job';

// ----------------------------------------------------------------------

type Props = {
  job: INPFJobProps;
};

export default function JobItem({ job }: Props) {
  const { type, level, salary, location, urgent, created_at, experience, title } = job;

  return (
    <Card
      sx={{
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Stack sx={{ p: 3, pb: 0 }}>
        <Logo />
        <Stack spacing={0.5} sx={{ mt: 3, mb: 2 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Link component={RouterLink} href={paths.career_details(job.slug)} color="inherit">
              <TextMaxLine variant="h6" line={1}>
                {title}
              </TextMaxLine>
            </Link>
            {urgent && <Label color="error">Urgent</Label>}
          </Stack>

          <Typography variant="body2" sx={{ color: 'info.main' }}>
            National Policy Forum
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2', color: 'text.secondary' }}
          >
            <Iconify icon="carbon:location" width={18} sx={{ mr: 0.5 }} />
            {location}
          </Stack>
        </Stack>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          Posted day: {fDate(created_at)}
        </Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed', my: 2 }} />

      <Grid
        container
        spacing={1.5}
        sx={{
          p: 3,
          pt: 0,
          typography: 'body2',
          color: 'text.secondary',
          textTransform: 'capitalize',
        }}
      >
        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:increase-level" sx={{ mr: 1 }} />
            {`${experience} year exp`}
          </Stack>
        </Grid>

        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:time" sx={{ mr: 1 }} />
            {type}
          </Stack>
        </Grid>

        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:money" sx={{ mr: 1 }} />
            {typeof salary === 'number' ? fCurrency(salary) : salary}
          </Stack>
        </Grid>

        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:user" sx={{ mr: 1 }} />
            {level}
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
