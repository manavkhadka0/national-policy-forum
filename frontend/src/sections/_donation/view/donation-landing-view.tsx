'use client';


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { _socials } from 'src/_mock';

import Iconify from 'src/components/iconify';

import CareerNewsletter from 'src/sections/_career/career-newsletter';
import DonatorInfo from 'src/sections/_donation/details/donator-info';
import DonationHero from 'src/sections/_donation/details/donation-hero';
import DonationInfo from 'src/sections/_donation/details/donation-info';
import DonationDetailsSummary from 'src/sections/_donation/details/donation-details-summary';

import { IDonationDataProps, IDonationContentProps } from 'src/types/job';

// ----------------------------------------------------------------------

type Props = {
    donationContent: IDonationContentProps,
    donationData: IDonationDataProps[]
}

export default async function DonationLandingView({ donationContent, donationData }: Props) {
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
                    {/* {!mdUp && (
                        <Grid xs={12} md={5} lg={4}>
                            <DonationInfo job={_mockJob} />
                        </Grid>
                    )} */}

                    <Grid xs={12} md={7} lg={8}>
                        <DonationDetailsSummary donationContent={donationContent} />

                        <Divider sx={{ my: 5 }} />

                        <Stack direction="row" flexWrap="wrap" sx={{ mt: 5 }}>
                            <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
                                Share:
                            </Typography>

                            <Stack direction="row" alignItems="center" flexWrap="wrap">
                                {_socials.map((social) => (
                                    <Button
                                        key={social.value}
                                        size="small"
                                        variant="outlined"
                                        startIcon={<Iconify icon={social.icon} />}
                                        sx={{
                                            m: 0.5,
                                            flexShrink: 0,
                                            color: social.color,
                                            borderColor: social.color,
                                            '&:hover': {
                                                borderColor: social.color,
                                                bgcolor: alpha(social.color, 0.08),
                                            },
                                        }}
                                    >
                                        {social.label}
                                    </Button>
                                ))}
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid xs={12} md={5} lg={4}>
                        <Stack spacing={5}>
                            {mdUp && <DonatorInfo donationData={donationData} />}

                            <DonationInfo donationData={donationData} />

                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            <CareerNewsletter />
        </>
    );
}
