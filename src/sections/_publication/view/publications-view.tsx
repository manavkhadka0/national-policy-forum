'use client';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MarketingNewsletter from 'src/sections/_marketing/marketing-newsletter';
import MarketingLatestPosts from 'src/sections/blog/marketing/marketing-latest-posts';
import MarketingTestimonial from 'src/sections/_marketing/testimonial/marketing-testimonial';

import { IPublicationProps } from 'src/types/blog';
import { ITestimonialProps } from 'src/types/testimonial';

import PublicationsList from '../list/publications-list';

// ----------------------------------------------------------------------
type PublicationsViewProps = {
  category: string[];
  publications: IPublicationProps[];
  testimonials: ITestimonialProps[];
};

export default async function PublicationsView({
  testimonials,
  category,
  publications,
}: PublicationsViewProps) {
  return (
    <>
      <Container>
        <Stack
          spacing={3}
          sx={{
            py: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Our Publications</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Here are some of our publications.
            <br /> Check them out!
          </Typography>
        </Stack>

        <PublicationsList publications={publications} categoriesFetched={category} />
      </Container>

      <MarketingTestimonial testimonials={testimonials} />

      <MarketingLatestPosts posts={publications} />

      <MarketingNewsletter />
    </>
  );
}
