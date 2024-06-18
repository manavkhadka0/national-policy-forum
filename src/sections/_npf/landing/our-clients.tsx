import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Carousel, { useCarousel } from 'src/components/carousel';

import { IBrandProps } from 'src/types/brand';

// ----------------------------------------------------------------------

type Props = {
  clients: IBrandProps[];
};

export default function OurClients({ clients }: Props) {
  const theme = useTheme();

  const carousel = useCarousel({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  });

  if (!clients.length) return null;

  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">Our Collaborators</Typography>

        <Typography sx={{ color: 'text.secondary' }}>Partnering for Policy Excellence</Typography>
      </Stack>

      <Carousel {...carousel.carouselSettings}>
        {clients?.map((client) => (
          <Box key={client.id} sx={{ px: 1.5 }}>
            <Stack
              component={Paper}
              alignItems="center"
              justifyContent="center"
              variant="outlined"
              sx={{
                py: 3,
                borderRadius: 2,
                bgcolor: 'background.default',
              }}
            >
              <Image
                alt={client.name}
                src={client.image}
                sx={{
                  width: 106,
                  height: 32,
                  mx: 'auto',
                }}
              />
            </Stack>
          </Box>
        ))}
      </Carousel>
    </Container>
  );
}
