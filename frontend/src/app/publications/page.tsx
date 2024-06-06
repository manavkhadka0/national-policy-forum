import { getPublications } from 'src/actions/publications';
import { getCategoriesNameOnly } from 'src/actions/categories';

import MarketingCaseStudiesView from 'src/sections/_marketing/view/marketing-case-studies-view';

import { IPublicationProps } from 'src/types/blog';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Home - National Policy Forum',
};

export const revalidate = 10;

export default async function TravelLandingPage() {

  const categories: string[] = await getCategoriesNameOnly();
  const publications: IPublicationProps[] = await getPublications ();

  return <MarketingCaseStudiesView category={categories} publications={publications}/>;
}
