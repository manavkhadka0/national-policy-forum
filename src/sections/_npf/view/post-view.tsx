'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';

import { _mock } from 'src/_mock';

import Markdown from 'src/components/markdown';
import ScrollProgress from 'src/components/scroll-progress';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import NpfPostHero from 'src/sections/blog/npf/npf-post-hero';
import NpfLatestPosts from 'src/sections/blog/npf/npf-latest-posts';
import TravelNewsletter from 'src/sections/_travel/travel-newsletter';
import PostSocialsShare from 'src/sections/blog/common/post-socials-share';

import { IBlogPostProps } from 'src/types/blog';

import PostTags from '../../blog/common/post-tags';
import PostAuthor from '../../blog/common/post-author';
import PostSidebar from '../../blog/common/post-sidebar';
import TableOfContents from './table-of-content';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
  tags: string[];
  categories: string[];
  recentPosts: IBlogPostProps[];
};

export default function PostView({ post, recentPosts, categories, tags: mainTag }: Props) {
  const { title, author, tags, content } = post;

  const { scrollYProgress } = useScroll();

  return (
    <>
      <NpfPostHero post={post} />

      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Home', href: '/' },
            {
              name: 'Blog',
              href: paths.posts,
            },
            { name: title },
          ]}
        />
      </Container>

      <Divider sx={{ mb: { xs: 6, md: 10 } }} />

      <Container maxWidth={false}>
        <Grid container spacing={{ md: 8 }}>
          <ScrollProgress scrollYProgress={scrollYProgress} />
          <Grid xs={12} md={3}>
            <TableOfContents content={content} />
          </Grid>
          <Grid xs={12} md={6}>
            <Markdown content={content} firstLetter />

            <PostTags tags={tags} />

            <Box sx={{ mt: 5 }}>
              <PostSocialsShare longButtons />
            </Box>

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={author} />
          </Grid>

          <Grid xs={12} md={3}>
            <PostSidebar author={author} recentPosts={{ list: recentPosts, basePath: 'posts' }} />
          </Grid>
        </Grid>
      </Container>

      <NpfLatestPosts posts={recentPosts} />

      <TravelNewsletter />
    </>
  );
}
