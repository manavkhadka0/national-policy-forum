'use client';

import { Slide, SlideImage } from 'yet-another-react-lightbox';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
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
    <Box
      sx={{
        backgroundColor: 'background.neutral',
        py: 6,
      }}
    >
      <Container>
        <Stack direction="column" spacing={3}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={{ xs: 'center', md: 'space-between' }}
            sx={{
              mb: { xs: 6 },
            }}
          >
            <Typography variant="h3">Our Gallery </Typography>
          </Stack>
          <Grid container spacing={3}>
            <Grid xs={12}>
              <Box
                gap={2}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                }}
              >
                {galleries?.map((slide, index) => {
                  const thumbnail =
                    slide.type === 'video'
                      ? (slide as SlideVideo).poster
                      : (slide as SlideImage).src;

                  return (
                    <Box
                      key={index}
                      sx={{
                        position: 'relative',
                      }}
                    >
                      <Stack
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                          position: 'relative',
                          borderRadius: 2,
                          overflow: 'hidden',
                        }}
                      >
                        <Fab
                          color="primary"
                          onClick={() => lightbox.onOpen(`${thumbnail}`)}
                          sx={{
                            zIndex: 9,

                            position: 'absolute',
                            display: slide.type === 'video' ? 'flex' : 'none',
                          }}
                        >
                          <Iconify icon="carbon:play" width={24} />
                        </Fab>

                        <Image
                          alt={thumbnail}
                          key={thumbnail}
                          src={thumbnail}
                          ratio="1/1"
                          sx={{
                            borderRadius: 1,
                            cursor: 'pointer',
                            objectFit: 'cover',
                          }}
                        />
                      </Stack>
                    </Box>
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
    </Box>
  );
}
