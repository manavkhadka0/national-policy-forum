'use client';


import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { _mock } from 'src/_mock';

import Markdown from 'src/components/markdown';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import PostSocialsShare from 'src/sections/blog/common/post-socials-share';

import { IBlogPostProps } from 'src/types/blog';

import PostTags from '../../blog/common/post-tags';
import TravelNewsletter from '../travel-newsletter';
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

export default function TravelPostView({ post, recentPosts, categories, tags: mainTag }: Props) {
  const { title, description, author, tags, content } = post;

  return (
    <>
      <TravelPostHero post={post} />

      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.posts },
            { name: title },
          ]}
        />
      </Container>

      <Divider sx={{ mb: { xs: 6, md: 10 } }} />

      <Container>
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <Typography variant="h5" sx={{ mb: 5 }}>
              {description}
            </Typography>
            {post.pdf ? <PDFViewer file={post.pdf} /> : null}

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
