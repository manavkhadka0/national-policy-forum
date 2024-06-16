import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { Category } from 'src/actions/categories';

import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';

import TopicItem from './npf-trending-topic-item';

// ----------------------------------------------------------------------

type NpfTrendingTopicsProps = {
  categories: Category[];
};

// ----------------------------------------------------------------------

export default function NpfTrendingTopics({ categories }: NpfTrendingTopicsProps) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const carousel = useCarousel({
    slidesToShow: 4,
    slidesToScroll: 1,
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

  return (
    <Box sx={{ bgcolor: 'background.neutral' }}>
      <Container
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Stack
          direction="row"
          justifyContent={{ md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h3">Trending Topics</Typography>

          {mdUp && <CarouselArrows onNext={carousel.onNext} onPrev={carousel.onPrev} spacing={2} />}
        </Stack>

        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {categories.map((topic) => (
            <TopicItem key={topic.id} topic={topic} />
          ))}
        </Carousel>

        {!mdUp && (
          <CarouselArrows
            spacing={2}
            justifyContent="center"
            onNext={carousel.onNext}
            onPrev={carousel.onPrev}
            sx={{ mt: 8, width: 1 }}
          />
        )}
      </Container>
    </Box>
  );
}
