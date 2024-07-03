import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';
import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import { IPublicationProps } from 'src/types/blog';

import NpfLatestEventsItem from './npf-latest-events-item';

// ----------------------------------------------------------------------

type Props = {
  events: IPublicationProps[];
};

export default function NpfLatestEvents({ events }: Props) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const carousel = useCarousel({
    slidesToShow: 3,
    slidesToScroll: 1,
    ...CarouselDots(),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.events}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: 8,
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
        >
          <Typography variant="h3">Latest Events</Typography>

          {mdUp && viewAllBtn}
        </Stack>

        <Box sx={{ position: 'relative' }}>
          <CarouselArrows
            onNext={carousel.onNext}
            onPrev={carousel.onPrev}
            leftButtonProps={{ sx: { left: { xs: -10, md: -40 } } }}
            rightButtonProps={{ sx: { right: { xs: 0, md: -40 } } }}
          >
            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
              {events.map((post) => (
                <Box
                  key={post.slug}
                  sx={{
                    px: 2,
                    py: { xs: 8, md: 10 },
                  }}
                >
                  <NpfLatestEventsItem event={post} />
                </Box>
              ))}
            </Carousel>
          </CarouselArrows>
        </Box>

        {!mdUp && (
          <Stack alignItems="center" sx={{ mt: 8 }}>
            {viewAllBtn}
          </Stack>
        )}
      </Container>
    </Box>
  );
}
