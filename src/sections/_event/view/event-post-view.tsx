'use client';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import Markdown from 'src/components/markdown';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import NpfLatestEvents from 'src/sections/blog/npf/npf-latest-events';
import MarketingNewsletter from 'src/sections/_marketing/marketing-newsletter';

import { IPublicationProps } from 'src/types/blog';

import PostTags from '../../blog/common/post-tags';
import PostAuthor from '../../blog/common/post-author';
import PostSocialsShare from '../../blog/common/post-socials-share';

// ----------------------------------------------------------------------
type EventPostViewProps = {
  event: IPublicationProps;
  latest_events: IPublicationProps[];
};
export default function EventPostView({ event, latest_events }: EventPostViewProps) {
  const { title, description, duration, created_at, author, cover, tags, content } = event;

  return (
    <>
      <Image alt="hero" src={cover} ratio="21/9" />
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Events', href: paths.events },
            { name: title },
          ]}
        />
      </Container>

      <Divider />

      <Container>
        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                textAlign: 'center',
                pt: { xs: 5, md: 10 },
                pb: 5,
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                {duration}
              </Typography>

              <Typography variant="h2" component="h1">
                {title}
              </Typography>
              <Typography variant="h5">{description}</Typography>
            </Stack>

            <Divider />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={1.5}
              sx={{ py: 3 }}
            >
              <Avatar src={author.avatar} sx={{ width: 48, height: 48 }} />

              <Stack spacing={0.5} flexGrow={1}>
                <Typography variant="subtitle2">{author.name}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {fDate(created_at, 'dd/MM/yyyy p')}
                </Typography>
              </Stack>

              <PostSocialsShare />
            </Stack>

            <Divider sx={{ mb: 6 }} />

            <Markdown content={content} firstLetter />

            {event.pdf && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  my: 2,
                }}
              >
                <Link
                  href={event.pdf}
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
                  src={event.pdf}
                  width="100%"
                  height="900"
                />
              </Box>
            )}

            {tags.length && <PostTags tags={tags} />}

            <Box mt={5}>
              <PostSocialsShare longButtons />
            </Box>

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={author} />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <NpfLatestEvents events={latest_events} />

      <MarketingNewsletter />
    </>
  );
}
