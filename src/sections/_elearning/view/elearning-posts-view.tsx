'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { _mock, _coursePosts } from 'src/_mock';

import PostSidebar from '../../blog/common/post-sidebar';
import ElearningNewsletter from '../elearning-newsletter';
import ElearningPosts from '../../blog/elearning/elearning-posts';
import PostSearchMobile from '../../blog/common/post-search-mobile';
import ElearningFeaturedPost from '../../blog/elearning/elearning-featured-post';

// ----------------------------------------------------------------------

export default function ElearningPostsView() {
  return (
    <>
      <PostSearchMobile />

      <ElearningFeaturedPost post={_coursePosts[4]} />

      <Container
        sx={{
          pt: 10,
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <ElearningPosts posts={_coursePosts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar recentPosts={{ list: _coursePosts.slice(-4), basePath: '' }} />
          </Grid>
        </Grid>
      </Container>
      <ElearningNewsletter />
    </>
  );
}
