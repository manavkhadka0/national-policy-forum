'use-client';

import { getSingleJob } from 'src/actions/jobs';

import JobView from 'src/sections/_jobs/view/job-view';

import { INPFJobProps } from 'src/types/job';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const job: INPFJobProps = await getSingleJob(params.slug);

  return {
    title: `${job.title} | National Policy Forum`,
    description: job.description,
    image: job.cover,
    openGraph: {
      title: `${job.title} | National Policy Forum`,
      description: job.description,
      images: [job.cover],
      type: 'article',
      publishedTime: job.created_at,
      modifiedTime: job.updated_at,
    },
  };
}

export const revalidate = 10;

export default async function JobPage({ params }: { params: { slug: string } }) {
  const job = await getSingleJob(params.slug);

  return <JobView job={job} />;
}
