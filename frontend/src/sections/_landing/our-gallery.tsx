'use client';

import { Slide, SlideImage } from 'yet-another-react-lightbox';

import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { HOST_API } from 'src/config-global';

import Image from 'src/components/image';
import Lightbox, { SlideVideo, useLightbox } from 'src/components/lightbox';

// ----------------------------------------------------------------------

type GalleryProps = {
  galleries: Slide[];
};
// ----------------------------------------------------------------------

export default function OurGallery({ galleries }: GalleryProps) {
  const lightbox = useLightbox(appendHostToSlides(galleries, HOST_API as string));

  function appendHostToSlides(slides: Slide[], host: string): Slide[] {
    return slides?.map((slide) => {
      if (slide.type === 'video') {
        const videoSlide = slide as SlideVideo;
        if (!videoSlide?.poster?.startsWith(host)) {
          videoSlide.poster = `${host}${videoSlide.poster}`;
        }
        videoSlide.sources = videoSlide.sources.map((source) => ({
          ...source,
          src: source.src.startsWith(host) ? source.src : `${host}${source.src}`,
        }));
      } else {
        const imageSlide = slide as SlideImage;
        if (!imageSlide.src.startsWith(host)) {
          imageSlide.src = `${host}${imageSlide.src}`;
        }
      }
      return slide;
    });
  }

  return (
    <>
      <Container sx={{ my: 10 }}>
        <Stack
          direction="column"
          spacing={3}
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h2">Our Gallery</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget lorem. Etiam
            vitae tortor.
          </Typography>
          <Card sx={{ p: 3 }}>
            <Grid container spacing={3}>
              <Grid xs={12}>
                <Box
                  gap={1}
                  display="grid"
                  gridTemplateColumns={{
                    xs: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(4, 1fr)',
                  }}
                >
                  {galleries?.map((slide, index) => {
                    const thumbnail =
                      slide.type === 'video'
                        ? (slide as SlideVideo).poster
                        : (slide as SlideImage).src;

                    return (
                      <Stack direction="column" key={index}>
                        <Image
                          key={thumbnail}
                          alt={thumbnail}
                          src={HOST_API ? `${HOST_API}${thumbnail}` : thumbnail}
                          ratio="1/1"
                          onClick={() => lightbox.onOpen(`${thumbnail}`)}
                          sx={{
                            borderRadius: 1,
                            cursor: 'pointer',
                          }}
                        />
                        <Box>
                          <Typography variant="body1" component="h1" style={{ font: 'bold' }}>
                            {slide.title}
                          </Typography>
                          <Typography variant="body2" component="h1">
                            {slide.description}
                          </Typography>
                        </Box>
                      </Stack>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Stack>
      </Container>

      <Lightbox
        open={lightbox.open}
        close={lightbox.onClose}
        slides={appendHostToSlides(galleries, HOST_API as string)}
        index={lightbox.selected}
      />
    </>
  );
}
