import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import { IPublicationProps } from 'src/types/blog';

import PostTimeBlock from '../common/post-time-block';

// ----------------------------------------------------------------------

type Props = {
  event: IPublicationProps;
};

export default function NpfFeaturedPostItem({ event }: Props) {
  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={{ bgcolor: 'background.default', borderRadius: 2 }}
    >
      <Image src={event.cover} alt={event.title} sx={{ flexGrow: 1, height: { md: 560 } }} />

      <Stack
        justifyContent="space-between"
        sx={{
          mx: 'auto',
          p: { xs: 3, md: 5 },
          maxWidth: { md: 396 },
        }}
      >
        <Stack spacing={1}>
          <PostTimeBlock created_at={fDate(event.created_at)} duration={event.duration} />

          <Link component={RouterLink} href={paths.event(event.slug)} color="inherit" variant="h3">
            {event.title}
          </Link>

          <TextMaxLine line={3} variant="body2" sx={{ color: 'text.secondary' }}>
            {event.description}
          </TextMaxLine>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ pt: 2, typography: 'body2' }}>
          <Avatar src={event.author.avatar} sx={{ mr: 1 }} />
          {event.author.name}
        </Stack>
      </Stack>
    </Stack>
  );
}
