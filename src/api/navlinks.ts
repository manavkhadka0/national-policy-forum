import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher, endpoints } from 'src/utils/axios';

type Blog = {
  title: string;
  path: string;
};

type Publication = {
  title: string;
  path: string;
};
type Event = {
  title: string;
  path: string;
};

type RolePath = {
  name: string;
  path: string;
};

// "opportunity": {
//         "latest_opportunities": [
//             {
//                 "title": "Our Team Page",
//                 "path": "/opportunities/our-team-page"
//             }
//         ],
//         "opportunity_types": {
//             "title": "Opportunities",
//             "path": "#",
//             "children": [
//                 {
//                     "subheader": "Opportunities",
//                     "items": [
//                         {
//                             "title": "Hello",
//                             "path": "/opportunities-type/hello"
//                         }
//                     ]
//                 },
//                 {
//                     "subheader": "Grants",
//                     "items": [
//                         {
//                             "title": "dsadas",
//                             "path": "/opportunities-type/dsadas"
//                         }
//                     ]
//                 }
//             ]
//         }
//     }

type Opportunity = {
  title: string;
  path: string;
};

type OpportunityType = {
  title: string;
  path: string;
  children: {
    subheader: string;
    items: Opportunity[];
  }[];
};

export type NavigationData = {
  event: {
    latest_events: Event[];
  };
  blog: {
    latest_blogs: Blog[];
    featured_blogs: Blog[];
  };
  publication: {
    latest_publications: Publication[];
    featured_publications: Publication[];
  };
  our_team: {
    roles: RolePath[];
  };
  opportunity: {
    latest_opportunities: Opportunity[];
    opportunity_types: OpportunityType;
  };
};

// ----------------------------------------------------------------------

export function useGetNavlinks() {
  const URL = endpoints.navLinks.list;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      navlinks: (data as NavigationData) || [],
      navlinksLoading: isLoading,
      navlinksError: error,
      navlinksValidating: isValidating,
      navlinksEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
