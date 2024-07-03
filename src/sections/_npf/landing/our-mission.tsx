import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

export default function NpfOurMission() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.neutral',
      }}
    >
      <Container
        sx={{
          overflow: 'hidden',
          py: { xs: 5, md: 10 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          justifyContent="space-between"
          alignItems={{ md: 'center' }}
        >
          <Grid xs={12} md={6} lg={6}>
            <Stack
              spacing={3}
              sx={{
                maxWidth: 466,
                mb: { xs: 8, md: 5 },
                mx: { xs: 'auto', md: 'unset' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h2">Our Mission</Typography>

              <Typography variant="h5" fontWeight={600}>
                EDUCATE. ELEVATE. AWARE.
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                We at NPF believe that democracies are strengthened only when the people are
                empowered. Our mission is to work with the public to understand what works and shape
                what matters. NPF brings forward innovative ideas and solutions through research and
                effective policy designs to respond to the most pressing needs of our societies. We
                envision plans, dialogues and actions for national prosperity and nation building
                with the people, for the people.
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12} md={6} lg={5}>
            <Image alt="vision" src="/assets/illustrations/illustration_vision.svg" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
