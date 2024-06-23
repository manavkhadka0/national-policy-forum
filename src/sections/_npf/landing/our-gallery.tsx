'use client';

import { Slide, SlideImage } from 'yet-another-react-lightbox';

import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line/text-max-line';
import Lightbox, { SlideVideo, useLightbox } from 'src/components/lightbox';

// ----------------------------------------------------------------------

type GalleryProps = {
  galleries: Slide[];
};
// ----------------------------------------------------------------------

export default function OurGallery({ galleries }: GalleryProps) {
  const lightbox = useLightbox(galleries);

  if (!galleries.length) return null;

  return (
    <>
      <Container sx={{ my: 10 }} maxWidth={false}>
        <Stack
          direction="column"
          spacing={3}
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h2">Our Gallery</Typography>
          <Typography sx={{ color: 'text.secondary', pb: 4 }}>
            Visual Stories of Our Impact
          </Typography>
          <Grid container spacing={3}>
            <Grid xs={12}>
              <Box
                gap={2}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
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
                        src={thumbnail}
                        ratio="1/1"
                        onClick={() => lightbox.onOpen(`${thumbnail}`)}
                        sx={{
                          borderRadius: 1,
                          cursor: 'pointer',
                        }}
                      />
                      <Box textAlign="left" sx={{ pt: 2 }}>
                        <Typography variant="h5" component="h1" sx={{}} style={{ font: 'bold' }}>
                          {slide.title} {slide.type === 'video' && '🎥'}
                        </Typography>
                        <TextMaxLine variant="body2" line={2}>
                          {slide.description}
                        </TextMaxLine>
                      </Box>
                    </Stack>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>

      <Lightbox
        open={lightbox.open}
        disabledVideo
        close={lightbox.onClose}
        slides={galleries}
        index={lightbox.selected}
      />
    </>
  );
}
