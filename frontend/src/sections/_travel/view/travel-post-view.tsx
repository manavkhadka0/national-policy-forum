'use client';

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';

import { _mock } from 'src/_mock';
import { useGetPosts } from 'src/api/blog';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import Markdown from 'src/components/markdown';

import PostSocialsShare from 'src/sections/blog/common/post-socials-share';

import { IBlogPostProps } from 'src/types/blog';

import { Tags } from 'src/actions/tag';
import PostAuthor from '../../blog/common/post-author';
import PostSidebar from '../../blog/common/post-sidebar';
import PostTags from '../../blog/common/post-tags';
import TravelLatestPosts from '../../blog/travel/travel-latest-posts';
import TravelPostHero from '../../blog/travel/travel-post-hero';
import TravelNewsletter from '../travel-newsletter';

// ----------------------------------------------------------------------

interface TravelPostViewProps {
  post: IBlogPostProps;
  tags: Tags[];
  categories: string[];
}
const TravelPostView: React.FC<TravelPostViewProps> = ({ post,categories:mainCategory, tags: popularTags }) => {

  const { title, description, author, tags, content } = post;

  const { posts } = useGetPosts();

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

            <Markdown content={content} firstLetter />

            <PostTags tags={tags} />

            <PostSocialsShare longButtons />

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={author} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={popularTags}
              author={author}
              categories={mainCategory}
              recentPosts={{ list: posts.slice(-4) }}
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

      <TravelLatestPosts posts={posts} />

      <TravelNewsletter />
    </>
  );
}
export default TravelPostView;