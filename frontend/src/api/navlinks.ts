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

export type NavigationData = {
  blog: {
    latest_blogs: Blog[];
    featured_blogs: Blog[];
  };
  publication: {
    latest_publications: Publication[];
    featured_publications: Publication[];
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
