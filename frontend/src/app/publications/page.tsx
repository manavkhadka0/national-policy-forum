import { Category, getCategories, getCategoriesNameOnly } from 'src/actions/categories';
import MarketingCaseStudiesView from 'src/sections/_marketing/view/marketing-case-studies-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Home - National Policy Forum',
};

export const revalidate = 10;

export default async function TravelLandingPage() {

  const categories: string[] = await getCategoriesNameOnly();

  return <MarketingCaseStudiesView category={categories}/>;
}
