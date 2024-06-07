'use client';

import { SlideImage } from 'yet-another-react-lightbox';

import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import Image from 'src/components/image';
import Lightbox, { SlideVideo, useLightbox } from 'src/components/lightbox';

import { IGalleryProps } from 'src/types/gallery';

// ----------------------------------------------------------------------

type GalleryProps={
    galleries:IGalleryProps[]
}
// ----------------------------------------------------------------------

export default function LightboxView({galleries}:GalleryProps) {
    const slides = galleries?.map(slide => {
        if (slide.type === 'video') {
            return {
                ...slide,
                type: 'video', // Ensure the type is explicitly set to 'video'
            };
        }
        return slide; // For images, simply return the slide object as is
    });
    const lightbox = useLightbox(slides);

    return (
        <>
            <Container sx={{ my: 10 }}>

                <Stack direction='column' spacing={3}
                    sx={{
                        textAlign: 'center',
                    }}>
                    <Typography variant="h2">Our Gallery</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget lorem. Etiam vitae
                        tortor.
                    </Typography>
                    <Card sx={{ p: 3 }}>
                        <Grid container spacing={3}>
                            <Grid xs={12} >
                                <Box
                                    gap={1}
                                    display="grid"
                                    gridTemplateColumns={{
                                        xs: 'repeat(2, 1fr)',
                                        sm: 'repeat(3, 1fr)',
                                        md: 'repeat(4, 1fr)',
                                    }}
                                >
                                    {galleries?.map((slide) => {
                                        const thumbnail =
                                            slide.type === 'video'
                                                ? (slide as unknown as SlideVideo).poster
                                                : (slide as SlideImage).src;

                                        return (

                                            <Stack direction='column'>
                                                <Image
                                                    key={thumbnail}
                                                    alt={thumbnail}
                                                    src={thumbnail}
                                                    ratio="1/1"
                                                    onClick={() => lightbox.onOpen(`${thumbnail}`)}
                                                    sx={{
                                                        borderRadius: 1,
                                                        cursor: 'pointer',
                                                    }} />
                                                <Box >
                                                    <Typography variant='body1' component='h1' style={{ font: 'bold' }}>{slide.title}</Typography>
                                                    <Typography variant='body2' component='h1'>{slide.description}</Typography>
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
                slides={slides}
                index={lightbox.selected}

            />
        </>
    );
}
