import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import { IPublicationProps } from 'src/types/blog';

import PostItem from './npf-latest-publication-item';
import PostItemMobile from '../common/post-item-mobile';

// ----------------------------------------------------------------------

type Props = {
  publications: IPublicationProps[];
};

export default function NpfLatestPublications({ publications }: Props) {
  const mdUp = useResponsive('up', 'md');

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.publications}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );

  return (
    <Container
      sx={{
        py: 6,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'space-between' }}
        sx={{
          mb: 6,
        }}
      >
        <Typography variant="h3">Latest Publications</Typography>

        {mdUp && viewAllBtn}
      </Stack>

      <Box
        sx={{
          gap: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {publications
          .slice(0, 4)
          .map((publication) =>
            mdUp ? (
              <PostItem key={publication.slug} publication={publication} />
            ) : (
              <PostItemMobile key={publication.slug} post={publication} basePath="publications" />
            )
          )}
      </Box>

      {!mdUp && (
        <Stack alignItems="center" sx={{ mt: 8 }}>
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}
