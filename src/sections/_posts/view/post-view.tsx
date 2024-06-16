'use client';

import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { _mock } from 'src/_mock';

import Markdown from 'src/components/markdown';
import ScrollProgress from 'src/components/scroll-progress';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import TravelNewsletter from 'src/sections/_travel/travel-newsletter';
import PostSocialsShare from 'src/sections/blog/common/post-socials-share';

import { IPublicationProps } from 'src/types/blog';

import PostTags from '../../blog/common/post-tags';
import PostAuthor from '../../blog/common/post-author';
import PostSidebar from '../../blog/common/post-sidebar';
import TravelPostHero from '../../blog/travel/travel-post-hero';
import TravelLatestPosts from '../../blog/travel/travel-latest-posts';

// ----------------------------------------------------------------------

type Props = {
  post: IPublicationProps;
  tags: string[];
  categories: string[];
  recentPosts: IPublicationProps[];
};

export default function PostView({ post, recentPosts, categories, tags: mainTag }: Props) {
  const { title, description, author, tags, content } = post;

  const { scrollYProgress } = useScroll();

  return (
    <>
      <TravelPostHero post={post} />

      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Home', href: '/' },
            {
              name: post?.pdf ? 'Publications' : 'Blog',
              href: post?.pdf ? paths.publications : paths.posts,
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

            {post.pdf && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  my: 2,
                }}
              >
                <Link
                  href={post.pdf}
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="go to homepage"
                  alignSelf={{ xs: 'flex-start', md: 'flex-end' }}
                  sx={{ lineHeight: 0, mb: 1, ml: 'auto' }}
                >
                  <Button variant="outlined" color="inherit">
                    Full screen
                  </Button>
                </Link>

                <iframe
                  title="publication-pdf"
                  className="pdf"
                  aria-label="pdf"
                  src={post.pdf}
                  width="100%"
                  height="900"
                />
              </Box>
            )}

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
              recentPosts={{ list: recentPosts }}
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

      <TravelLatestPosts posts={recentPosts} />

      <TravelNewsletter />
    </>
  );
}
