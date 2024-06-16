'use client';

import { useScroll } from 'framer-motion';

import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

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

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
  tags: string[];
  categories: string[];
  recentPosts: IBlogPostProps[];
};

export default function PostView({ post, recentPosts, categories, tags: mainTag }: Props) {
  const { title, description, author, tags, content } = post;

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

      <Container>
        <Grid container spacing={{ md: 8 }}>
          <ScrollProgress scrollYProgress={scrollYProgress} />
          <Grid xs={12} md={8}>
            <Typography variant="h5" sx={{ mb: 5 }}>
              {description}
            </Typography>

            <Markdown content={content} firstLetter />

            <PostTags tags={tags} />

            <PostSocialsShare longButtons />

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={author} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={mainTag}
              author={author}
              recentPosts={{ list: recentPosts, basePath: 'posts' }}
              categories={categories}
              advertisement={{
                title: 'Advertisement',
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.travel(9),
                path: '',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <NpfLatestPosts posts={recentPosts} />

      <TravelNewsletter />
    </>
  );
}
