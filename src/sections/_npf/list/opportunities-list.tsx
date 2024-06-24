import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { OpportunityType } from 'src/actions/opportunities';

import { IBlogPostProps } from 'src/types/blog';

import OpportunityPostItem from './opportunity-post-item copy';

// ----------------------------------------------------------------------

type Props = {
  opportunities: IBlogPostProps[];
  categoriesFetched: OpportunityType[];
  selectedTypeSlug: string | null;
};

export default function OpportunitiesList({
  opportunities,
  categoriesFetched,
  selectedTypeSlug,
}: Props) {
  const [tab, setTab] = useState(
    categoriesFetched.find((category) => category.slug === selectedTypeSlug)?.title || 'All'
  );

  const categories = [
    'All',
    ...Array.from(new Set(categoriesFetched.map((category) => category.title))),
  ];

  const filtered = applyFilter(opportunities, tab);

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  }, []);

  return (
    <>
      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
      >
        {categories.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>

      <Box
        sx={{
          pt: 5,
          pb: 10,
          gap: 4,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {filtered.map((project) => (
          <OpportunityPostItem key={project.id} post={project} />
        ))}
      </Box>
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter(arr: IBlogPostProps[], category: string) {
  if (category !== 'All') {
    arr = arr.filter((project) => project.category === category);
  }
  return arr;
}
