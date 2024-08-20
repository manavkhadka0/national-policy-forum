'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { Category } from 'src/actions/categories';
import { _tags, _mock, _categories } from 'src/_mock';

import { IBlogPostProps } from 'src/types/blog';

import TravelNewsletter from '../travel-newsletter';
import PostSidebar from '../../blog/common/post-sidebar';
import TravelPosts from '../../blog/travel/travel-posts';
import PostSearchMobile from '../../blog/common/post-search-mobile';
import TravelFeaturedPosts from '../../blog/travel/travel-featured-posts';
import TravelTrendingTopics from '../../blog/travel/travel-trending-topics';

// ----------------------------------------------------------------------

type TravelPostsViewProps = {
  posts: IBlogPostProps[];
  categories: Category[];
};
export default function TravelPostsView({ posts, categories }: TravelPostsViewProps) {
  return (
    <>
      <PostSearchMobile />

      <TravelFeaturedPosts posts={posts} />

      <TravelTrendingTopics categories={categories} />

      <Container
        sx={{
          mt: { xs: 4, md: 10 },
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <TravelPosts posts={posts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar recentPosts={{ list: posts, basePath: '' }} />
          </Grid>
        </Grid>
      </Container>

      <TravelNewsletter />
    </>
  );
}
