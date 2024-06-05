import MarketingCaseStudiesView from 'src/sections/_marketing/view/marketing-case-studies-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Home - National Policy Forum',
};

export const revalidate = 10;

export default async function TravelLandingPage() {
  return <MarketingCaseStudiesView />;
}
