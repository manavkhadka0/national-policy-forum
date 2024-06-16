'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { Category } from 'src/actions/categories';

import NpfPosts from 'src/sections/blog/npf/npf-posts';
import TravelNewsletter from 'src/sections/_travel/travel-newsletter';
import NpfFeaturedPosts from 'src/sections/blog/npf/npf-featured-posts';
import NpfTrendingTopics from 'src/sections/blog/npf/npf-trending-topics';

import { IBlogPostProps } from 'src/types/blog';

import PostSidebar from '../../blog/common/post-sidebar';
import PostSearchMobile from '../../blog/common/post-search-mobile';

// ----------------------------------------------------------------------

type TravelPostsViewProps = {
  posts: IBlogPostProps[];
  categories: Category[];
  categoriesName: string[];
  tags: string[];
};
export default function PostsView({
  posts,
  categories,
  categoriesName,
  tags,
}: TravelPostsViewProps) {
  return (
    <>
      <PostSearchMobile />

      <NpfFeaturedPosts posts={posts} />

      <NpfTrendingTopics categories={categories} />

      <Container
        sx={{
          mt: { xs: 4, md: 10 },
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8} sx={{ my: 3 }}>
            <NpfPosts posts={posts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={tags}
              categories={categoriesName}
              recentPosts={{ list: posts, basePath: 'posts' }}
              //   advertisement={{
              //     title: 'Advertisement',
              //     description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
              //     imageUrl: _mock.image.travel(9),
              //     path: '',
              //   }}
            />
          </Grid>
        </Grid>
      </Container>

      <TravelNewsletter />
    </>
  );
}
