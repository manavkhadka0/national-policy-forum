'use client';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { IPublicationProps } from 'src/types/blog';
import { ITestimonialProps } from 'src/types/testimonial';

import MarketingNewsletter from '../marketing-newsletter';
import MarketingCaseStudyList from '../list/marketing-case-study-list';
import MarketingTestimonial from '../testimonial/marketing-testimonial';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';

// ----------------------------------------------------------------------
type MarketingCaseStudiesViewProps = {
  category: string[];
  publications: IPublicationProps[];
  testimonials: ITestimonialProps[];
};


export default async function MarketingCaseStudiesView({ testimonials,category, publications }: MarketingCaseStudiesViewProps) {

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
            Nullam tincidunt adipiscing enim.
            <br /> Mauris sollicitudin fermentum libero.
          </Typography>
        </Stack>

        <MarketingCaseStudyList publications={publications} categoriesFetched={category} />
      </Container>

      <MarketingTestimonial testimonials={testimonials} />

      {/* <BlogMarketingLatestPosts posts={publications} /> */}

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
