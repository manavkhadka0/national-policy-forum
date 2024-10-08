'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { _tags, _mock, _categories, _careerPosts } from 'src/_mock';

import CareerNewsletter from '../career-newsletter';
import PostSidebar from '../../blog/common/post-sidebar';
import CareerPosts from '../../blog/career/career-posts';
import PostSearchMobile from '../../blog/common/post-search-mobile';

// ----------------------------------------------------------------------

export default function CareerPostsView() {
  return (
    <>
      <PostSearchMobile />

      <Container
        sx={{
          pt: { xs: 0, md: 5 },
          pb: { xs: 8, md: 15 },
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <CareerPosts posts={_careerPosts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar recentPosts={{ list: _careerPosts.slice(-4), basePath: '' }} />
          </Grid>
        </Grid>
      </Container>

      <CareerNewsletter />
    </>
  );
}
