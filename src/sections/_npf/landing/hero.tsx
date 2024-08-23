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

import { bgGradient } from 'src/theme/css';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import { IPublicationProps } from 'src/types/blog';

// ----------------------------------------------------------------------

type Props = {
  articles: IPublicationProps[];
};

export default function Hero({ articles }: Props) {
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

  useEffect(() => {
    carouselLarge.onSetNav();
  }, [carouselLarge]);

  if (!articles?.length) {
    return null;
  }

  return (
    <Box sx={{ minHeight: { md: '100vh' }, position: 'relative' }}>
      {!!articles.length && (
        <Carousel {...carouselLarge.carouselSettings} ref={carouselLarge.carouselRef}>
          {articles.map((article) => (
            <CarouselItem key={article.id} article={article} />
          ))}
        </Carousel>
      )}

      {mdUp && !!articles.length && (
        <CarouselArrows
          spacing={2}
          filled
          justifyContent="center"
          onNext={carouselLarge.onNext}
          onPrev={carouselLarge.onPrev}
          sx={{
            width: 1,
            alignItems: 'center',
            position: 'absolute',
            top: '90%',
            transform: 'translateY(-50%)',
          }}
        />
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  article: IPublicationProps;
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
          px: { xs: 2, md: 14 },
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
