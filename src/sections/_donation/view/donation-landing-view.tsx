'use client';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { useResponsive } from 'src/hooks/use-responsive';

import CareerNewsletter from 'src/sections/_career/career-newsletter';
import DonatorInfo from 'src/sections/_donation/details/donator-info';
import DonationHero from 'src/sections/_donation/details/donation-hero';
import DonationInfo from 'src/sections/_donation/details/donation-info';
import PostSocialsShare from 'src/sections/blog/common/post-socials-share';
import DonationDetailsSummary from 'src/sections/_donation/details/donation-details-summary';

import { IDonationDataProps, IDonationContentProps } from 'src/types/job';

// ----------------------------------------------------------------------

type Props = {
  donationContent: IDonationContentProps;
  donationData: IDonationDataProps[];
};

export default function DonationLandingView({ donationContent, donationData }: Props) {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <DonationHero donation={donationContent} />

      <Container
        sx={{
          overflow: 'hidden',
          pt: { xs: 5, md: 10 },
          pb: 10,
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }}>
          {!mdUp && (
            <Grid xs={12} md={5} lg={4}>
              <DonationInfo donationData={donationData.slice(1, donationData.length)} />
            </Grid>
          )}

          <Grid xs={12} md={7} lg={8}>
            <DonationDetailsSummary donationContent={donationContent} />

            <Divider sx={{ my: 5 }} />

            <Stack direction="row" flexWrap="wrap" sx={{ mt: 5 }}>
              <Stack direction="row" alignItems="center" flexWrap="wrap">
                <PostSocialsShare longButtons />
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={5} lg={4}>
            <Stack spacing={5}>
              {mdUp && <DonatorInfo donationData={donationData[0]} />}

              <DonationInfo donationData={donationData.slice(1, donationData.length)} />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <CareerNewsletter />
    </>
  );
}
