import { getDonationData, getDonationContent } from 'src/actions/donation';

import DonationLandingView from 'src/sections/_npf/_donation/view/donation-landing-view';

import { IDonationDataProps, IDonationContentProps } from 'src/types/job';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Donations - National Policy Forum',
};

export const revalidate = 10;

export default async function DonationLandingPage() {
  const donationContent: IDonationContentProps[] = await getDonationContent();
  const donationData: IDonationDataProps[] = await getDonationData();

  return <DonationLandingView donationContent={donationContent[0]} donationData={donationData} />;
}
