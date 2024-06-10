import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { fDate } from 'src/utils/format-time';

import { bgBlur, bgGradient } from 'src/theme/css';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import { IBlogPostProps } from 'src/types/blog';

// ----------------------------------------------------------------------

type Props = {
  articles: IBlogPostProps[];
};

export default function TravelLandingHero({ articles }: Props) {
  const mdUp = useResponsive('up', 'md');

  const carouselLarge = useCarousel({
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    ...CarouselDots({
      rounded: true,
      sx: {
        left: 0,
        right: 0,
        zIndex: 9,
        bottom: 64,
        position: 'absolute',
        display: { md: 'none' },
      },
    }),
  });

  const carouselThumb = useCarousel({
    vertical: true,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: '0px',
    verticalSwiping: true,
  });

  useEffect(() => {
    carouselLarge.onSetNav();
    carouselThumb.onSetNav();
  }, [carouselLarge, carouselThumb]);

  if (!articles?.length) {
    return null;
  }

  return (
    <Box sx={{ minHeight: { md: '100vh' }, position: 'relative' }}>
      {!!articles.length && (
        <Carousel
          {...carouselLarge.carouselSettings}
          asNavFor={carouselThumb.nav}
          ref={carouselLarge.carouselRef}
        >
          {articles.map((article) => (
            <CarouselItem key={article.id} article={article} />
          ))}
        </Carousel>
      )}

      {mdUp && (
        <Stack
          spacing={2}
          justifyContent="center"
          sx={{
            top: 0,
            height: 1,
            maxWidth: 440,
            position: 'absolute',
            right: 0,
            mx: 10,
          }}
        >
          {!!articles.length && (
            <>
              <Carousel
                {...carouselThumb.carouselSettings}
                asNavFor={carouselLarge.nav}
                ref={carouselThumb.carouselRef}
              >
                {articles.map((article, index) => (
                  <ThumbnailItem
                    key={article.id}
                    article={article}
                    selected={carouselLarge.currentIndex === index}
                  />
                ))}
              </Carousel>
              <CarouselArrows
                spacing={2}
                filled
                justifyContent="center"
                onNext={carouselThumb.onNext}
                onPrev={carouselThumb.onPrev}
                sx={{ width: 1 }}
              />
            </>
          )}
        </Stack>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  article: IBlogPostProps;
};

function CarouselItem({ article }: CarouselItemProps) {
  const theme = useTheme();

  const renderOverlay = (
    <Box
      sx={{
        ...bgGradient({
          startColor: `${alpha(theme.palette.primary.main, 0)} 0%`,
          endColor: `${alpha(theme.palette.primary.darker, 1)} 100%`,
        }),
        backgroundColor: alpha(theme.palette.primary.main, 0.6),
        top: 0,
        left: 0,
        zIndex: 8,
        width: 1,
        height: 1,
        position: 'absolute',
      }}
    />
  );

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        color: 'common.white',
        justifyContent: 'start',
      }}
    >
      <Stack
        alignItems="left"
        sx={{
          zIndex: 9,
          py: { xs: 14, md: 0 },
          px: { xs: 2, md: 5 },
          mt: { lg: 8 },
          position: { md: 'absolute' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'info.main', mb: { lg: 2 } }}>
          {article.category}
        </Typography>

        <Typography variant="h2" sx={{ maxWidth: 680 }}>
          {article.title}
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 680, mt: 3 }}>
          {article.description}
        </Typography>

        <Stack
          alignItems="left"
          spacing={{ xs: 2.5, md: 5 }}
          direction={{ xs: 'column', md: 'row' }}
          sx={{ my: 5 }}
        >
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:time" width={24} sx={{ mr: 1, color: 'common.white' }} />
            {article.duration}
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ mt: 0 }}>
              <Typography variant="subtitle2" sx={{ mr: 1 }}>
                Tags:
              </Typography>

              <Stack direction="row" flexWrap="wrap" spacing={1}>
                {article.tags.map((tag) => (
                  <Chip key={tag} size="medium" variant="filled" label={tag} onClick={() => {}} />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, md: 4 }}
          justifyContent="flex-start"
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <Stack direction="row" justifyContent="flex-start" spacing={1.5} sx={{ py: 3 }}>
            <Avatar src={article.author.avatar} sx={{ width: 48, height: 48 }} />

            <Stack spacing={0.5} flexGrow={1}>
              <Typography variant="subtitle2">{article.author.name}</Typography>
              <Typography variant="caption" sx={{ color: 'common.white' }}>
                {fDate(article.created_at, 'dd/MM/yyyy p')}
              </Typography>
            </Stack>
          </Stack>
          <Box>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              size="large"
              href={paths.post(article.slug)}
              sx={{
                background: theme.palette.common.white,
                color: theme.palette.common.black,
                height: 'fit',
              }}
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              Read More
            </Button>
          </Box>
        </Stack>
      </Stack>

      <Box
        sx={{
          width: 1,
          height: 1,
          position: {
            xs: 'absolute',
            md: 'relative',
          },
        }}
      >
        {renderOverlay}

        <Image
          alt="hero"
          src={article.cover}
          sx={{
            width: 1,
            height: { xs: 1, md: '100vh' },
          }}
        />
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ThumbnailItemProps = {
  article: IBlogPostProps;
  selected?: boolean;
};

function ThumbnailItem({ article, selected }: ThumbnailItemProps) {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2.5}
      sx={{
        px: 2,
        py: 1.5,
        my: 1,
        cursor: 'pointer',
        color: 'common.white',
        borderRadius: 2,
        ...bgBlur({
          opacity: 0.08,
          color: theme.palette.common.white,
        }),
        ...(selected && {
          ...bgBlur({
            opacity: 0.5,
            color: theme.palette.common.white,
          }),
        }),
      }}
    >
      <Avatar src={article.cover} sx={{ width: 48, height: 48, borderRadius: '8px' }} />

      <Stack spacing={0.5}>
        <TextMaxLine variant="h6" line={1}>
          {article.title}
        </TextMaxLine>

        <Stack direction="row" alignItems="center">
          <Iconify icon="carbon:category" sx={{ mr: 1, color: 'common.white' }} />
          <TextMaxLine variant="caption" line={1} sx={{ opacity: 0.48 }}>
            {article.category}
          </TextMaxLine>
        </Stack>
      </Stack>
    </Stack>
  );
}
