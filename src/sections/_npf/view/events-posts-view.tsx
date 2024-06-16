'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import NpfEvents from 'src/sections/blog/npf/npf-events';
import TravelNewsletter from 'src/sections/_travel/travel-newsletter';
import NpfFeaturedEvents from 'src/sections/blog/npf/npf-featured-events';
import PostSearchMobile from 'src/sections/blog/common/post-search-mobile';

import { IPublicationProps } from 'src/types/blog';

import PostSidebar from '../../blog/common/post-sidebar';

// ----------------------------------------------------------------------
type EventPostsViewProps = {
  events: IPublicationProps[];
  tags: string[];
  categories: string[];
  latest_events: IPublicationProps[];
};
export default async function EventPostsView({
  events,
  categories,
  tags,
  latest_events,
}: EventPostsViewProps) {
  return (
    <>
      <PostSearchMobile />

      <NpfFeaturedEvents posts={events} />

      <Container
        sx={{
          mt: 10,
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 8 }}>
          <Grid xs={12} md={8}>
            <NpfEvents events={events} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={tags}
              categories={categories}
              recentPosts={{ list: latest_events, basePath: 'events' }}
              // advertisement={{
              //   title: 'Advertisement',
              //   description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
              //   imageUrl: _mock.image.marketing(9),
              //   path: '',
              // }}
            />
          </Grid>
        </Grid>
      </Container>
      <TravelNewsletter />
    </>
  );
}
