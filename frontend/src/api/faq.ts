import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher, endpoints } from 'src/utils/axios';

type Faqs = {
  id: string;
  question: string;
  answer: string;
};

export function useGetFaqs() {
  const URL = endpoints.faq.list;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      faqs: (data as Faqs[]) || [],
      faqsLoading: isLoading,
      faqsError: error,
      faqsValidating: isValidating,
      faqsEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
