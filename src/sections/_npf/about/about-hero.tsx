import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

export default function AboutHero() {
  return (
    <Box
      sx={{
        pt: { xs: 5, md: 10 },
      }}
    >
      <Container>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h2">About NPF</Typography>

          <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
            The National Policy Forum (NPF), established in 2024 and registered under the Companies
            Act, operates as a consulting agency dedicated to educating, informing, and gathering
            opinions on public affairs in Nepal. Committed to promoting good governance,
            evidence-based decision-making, active citizenship, and civic awareness, NPF&apos;s
            mission extends to every corner of the country.
          </Typography>
        </Box>
      </Container>
      <Image
        src="/about.webp"
        alt="About"
        ratio="21/9"
        sx={{
          backgroundColor: '#F4F4F4',
        }}
      />
    </Box>
  );
}
