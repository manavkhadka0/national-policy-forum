import { getJobsList } from 'src/actions/jobs';

import JobsView from 'src/sections/_jobs/view/jobs-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Careers - National Policy Forum',
};

export const revalidate = 10;

export default async function DonationLandingPage() {
  const jobs = await getJobsList();
  return <JobsView jobs={jobs} />;
}
