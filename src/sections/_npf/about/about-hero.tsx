import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function AboutHero() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        {mdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image alt="teams" src="/assets/illustrations/illustration_teams.svg" />
          </Grid>
        )}

        <Grid
          xs={12}
          md={6}
          lg={6}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">About NPF</Typography>

          <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
            The National Policy Forum (NPF), established in 2024 and registered under the Companies
            Act, operates as a consulting agency dedicated to educating, informing, and gathering
            opinions on public affairs in Nepal. Committed to promoting good governance,
            evidence-based decision-making, active citizenship, and civic awareness, NPF&apos;s
            mission extends to every corner of the country. By fostering informed discourse among
            citizens, NPF aims to cultivate a more engaged and knowledgeable society, thereby
            driving positive change and contributing to the holistic betterment of Nepal. Through
            these efforts, NPF envisions a future where civic participation and awareness lead to
            sustainable and inclusive national development.
          </Typography>
        </Grid>
      </Grid>

      {/* <Box
        sx={{
          mt: 10,
          textAlign: 'center',
          display: 'grid',
          gap: { xs: 5, md: 8 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SUMMARY.map((value, index) => (
          <div key={value.title}>
            <StyledIcon color={COLORS[index]}>
              <Iconify icon={value.icon} width={48} />
            </StyledIcon>

            <Typography variant="h2" sx={{ mt: 2, mb: 1 }}>
              <CountUp
                start={value.total / 5}
                end={value.total}
                formattingFn={(newValue: number) => fShortenNumber(newValue)}
              />
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>{value.title}</Typography>
          </div>
        ))}
      </Box> */}
    </Container>
  );
}
