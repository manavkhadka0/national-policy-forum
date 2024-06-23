import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Customer Satisfaction',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:3d-curve-auto-colon',
  },
  {
    title: 'Transparency',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:chat-bot',
  },
  {
    title: 'Reputation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:airport-location',
  },
  {
    title: 'Cooperation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:event',
  },
];

// ----------------------------------------------------------------------

export default function AboutCoreValues() {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        bgcolor: 'background.neutral',
        py: { xs: 8, md: 15 },
      }}
    >
      <Container>
        <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 15 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">What do we do?</Typography>

          <Typography sx={{ color: 'text.secondary', maxWidth: { md: 540 } }}>
            NPF aims for evidence-based research that promotes accountability, transparency,
            evidence-based decision-making, and good governance. With a team of highly equipped
            research expertise and skills alongside guidance from our advisors, NPF aims to
            regularly educate people regarding the ongoing political and public affairs of Nepal and
            drive change in society through necessary policy intervention.
            <br />
            <br />
            NPF has fostered close collaborations with governmental and non-governmental
            organizations. This strategic partnership empowers NPF to offer invaluable assistance
            and support in several key areas, including conducting rigorous policy research,
            facilitating inclusive policy discussions, enhancing capacity-building initiatives, and
            actively contributing to the formulation of impactful laws and policies. By fostering
            effective partnerships and engaging with stakeholders, NPF aims to promote
            evidence-based decision-making and drive positive policy reforms for Nepal&apos;s
            betterment. Together, let&apos;s shape a future of policies that drive positive change
            and sustainable development in Nepal.
          </Typography>
        </Stack>

        <Grid container spacing={8}>
          {CORE_VALUES.map((value) => (
            <Grid
              key={value.title}
              xs={12}
              sm={6}
              md={3}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Iconify icon={value.icon} width={48} sx={{ color: 'primary.main' }} />

              <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                {value.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
