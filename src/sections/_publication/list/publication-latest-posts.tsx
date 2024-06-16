import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import PostItemMobile from 'src/sections/blog/common/post-item-mobile';

import { IBlogPostProps } from 'src/types/blog';

import PostItem from '../../blog/travel/travel-latest-post-item';

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPostProps[];
};

export default function PublicationLatest({ posts }: Props) {
  const mdUp = useResponsive('up', 'md');

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.publications}
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
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h3">Latest Publication</Typography>

          {mdUp && viewAllBtn}
        </Stack>

        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {posts
            .slice(0, 4)
            .map((post) =>
              mdUp ? (
                <PostItem key={post.slug} post={post} />
              ) : (
                <PostItemMobile key={post.slug} post={post} />
              )
            )}
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
