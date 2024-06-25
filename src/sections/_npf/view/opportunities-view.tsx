'use client';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { OpportunityType } from 'src/actions/opportunities';

import TravelNewsletter from 'src/sections/_travel/travel-newsletter';
import NpfTestimonial from 'src/sections/_npf/testimonial/npf-testimonial';

import { IBlogPostProps } from 'src/types/blog';
import { ITestimonialProps } from 'src/types/testimonial';

import OpportunitiesList from '../list/opportunities-list';

// ----------------------------------------------------------------------
type OpportunitiesViewProps = {
  category: OpportunityType[];
  opportunities: IBlogPostProps[];
  testimonials: ITestimonialProps[];
  type: string | null;
};

export default async function OpportunitiesView({
  testimonials,
  category,
  type,
  opportunities,
}: OpportunitiesViewProps) {
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
          <Typography variant="h2">Our Opportunities</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Find out latest opportunities from
            <br /> Nepal and accross the globe.
          </Typography>
        </Stack>

        <OpportunitiesList
          opportunities={opportunities}
          categoriesFetched={category}
          selectedTypeSlug={type}
        />
      </Container>

      <NpfTestimonial testimonials={testimonials} />

      {/* <NpfLatestOpportunities opportunities={opportunities} /> */}

      <TravelNewsletter />
    </>
  );
}
