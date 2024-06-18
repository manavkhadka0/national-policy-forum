'use client';

import { _testimonials } from 'src/_mock';

import MarketingNewsletter from '../marketing-newsletter';
import MarketingServices from '../services/marketing-services';
import MarketingServicesHero from '../services/marketing-services-hero';
import MarketingTestimonial from '../testimonial/marketing-testimonial';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import MarketingServicesInclude from '../services/marketing-services-include';
import MarketingServicesBenefits from '../services/marketing-services-benefits';
import MarketingServicesHowItWork from '../services/marketing-services-how-it-work';

// ----------------------------------------------------------------------

export default function MarketingServicesView() {
  return (
    <>
      <MarketingServicesHero />

      <MarketingServices />

      <MarketingServicesInclude />

      <MarketingServicesBenefits />

      <MarketingServicesHowItWork />

      <MarketingTestimonial testimonials={_testimonials} />

      {/* <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} /> */}

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
