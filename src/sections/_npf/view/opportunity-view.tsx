'use client';

import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';

import { useResponsive } from 'src/hooks/use-responsive';

import Markdown from 'src/components/markdown';
import ScrollProgress from 'src/components/scroll-progress';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import NpfPostHero from 'src/sections/blog/npf/npf-post-hero';
import TravelNewsletter from 'src/sections/_travel/travel-newsletter';
import PostSocialsShare from 'src/sections/blog/common/post-socials-share';

import { IPublicationProps } from 'src/types/blog';

import PostTags from '../../blog/common/post-tags';
import PostAuthor from '../../blog/common/post-author';
import PostSidebar from '../../blog/common/post-sidebar';

// ----------------------------------------------------------------------

type Props = {
  post: IPublicationProps;
  tags: string[];
  categories: string[];
  recentPosts: IPublicationProps[];
};

export default function OpportunityView({ post, recentPosts, categories, tags: mainTag }: Props) {
  const { title, author, tags, content } = post;

  const { scrollYProgress } = useScroll();

  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <NpfPostHero post={post} />

      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Home', href: '/' },
            {
              name: 'Opportunity',
              href: paths.opportunities,
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
            {post.pdf && mdUp && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  mb: 2,
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

            {!mdUp && post.pdf && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  mb: 2,
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
                    Download Pdf
                  </Button>
                </Link>
              </Box>
            )}

            <Markdown content={content} />

            <PostTags tags={tags} />

            <Box sx={{ mt: 5 }}>
              <PostSocialsShare longButtons />
            </Box>

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={author} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              author={author}
              recentPosts={{ list: recentPosts, basePath: 'opportunity' }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* <NpfLatestPosts posts={recentPosts} /> */}

      <TravelNewsletter />
    </>
  );
}
