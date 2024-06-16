'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { _mock } from 'src/_mock';

import PostSearchMobile from 'src/sections/blog/common/post-search-mobile';
import MarketingNewsletter from 'src/sections/_marketing/marketing-newsletter';

import { IPublicationProps } from 'src/types/blog';

import PostSidebar from '../../blog/common/post-sidebar';
import BlogMarketingPosts from '../../blog/marketing/marketing-posts';
import BlogMarketingFeaturedPosts from '../../blog/marketing/marketing-featured-posts';

// ----------------------------------------------------------------------
type EventPostsViewProps = {
  event: IPublicationProps[];
  tags: string[];
  categories: string[];
  latest_events: IPublicationProps[];
};
export default async function EventPostsView({
  event,
  categories,
  tags,
  latest_events,
}: EventPostsViewProps) {
  return (
    <>
      <PostSearchMobile />

      <BlogMarketingFeaturedPosts posts={event.slice(0, 5)} />

      <Container
        sx={{
          mt: 10,
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 8 }}>
          <Grid xs={12} md={8}>
            <BlogMarketingPosts posts={event} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={tags}
              categories={categories}
              recentPosts={{ list: latest_events }}
              advertisement={{
                title: 'Advertisement',
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.marketing(9),
                path: '',
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <MarketingNewsletter />
    </>
  );
}
