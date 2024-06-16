import JobsView from 'src/sections/_jobs/view/jobs-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Careers - National Policy Forum',
};

export const revalidate = 10;

export default async function DonationLandingPage() {
  return <JobsView />;
}
