import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { fDate } from 'src/utils/format-time';

import { bgGradient } from 'src/theme/css';

import { IBlogPostProps } from 'src/types/blog';

import PostSocialsShare from '../common/post-socials-share';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function NpfPostHero({ post }: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        // resize image and put in on right"

        height: { xs: 360, md: 660 },
        ...bgGradient({
          startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
          endColor: `${theme.palette.common.black} 75%`,
          imgUrl: post.hero,
        }),
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Stack
              spacing={3}
              alignItems={{
                xs: 'center',
                md: 'flex-start',
              }}
              sx={{
                color: 'common.white',
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <Typography variant="body2" sx={{ opacity: 0.72 }}>
                {post.duration}
              </Typography>

              <Typography variant="h2" component="h1">
                {post.title}
              </Typography>

              <Typography variant="caption" sx={{ opacity: 0.72 }}>
                {fDate(post.created_at, 'dd/MM/yyyy p')}
              </Typography>

              <PostSocialsShare longButtons={false} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
