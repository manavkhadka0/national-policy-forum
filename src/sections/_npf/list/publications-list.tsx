import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { IPublicationProps } from 'src/types/blog';

import PublicationPostItem from './publication-post-item';

// ----------------------------------------------------------------------

type Props = {
  publications: IPublicationProps[];
  categoriesFetched: string[];
};

export default function PublicationsList({ publications, categoriesFetched }: Props) {
  const [tab, setTab] = useState('All');

  const categories = ['All', ...Array.from(new Set(categoriesFetched))];

  const filtered = applyFilter(publications, tab);

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
          <PublicationPostItem key={project.id} post={project} />
        ))}
      </Box>
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter(arr: IPublicationProps[], category: string) {
  if (category !== 'All') {
    arr = arr.filter((project) => project.category === category);
  }
  return arr;
}
