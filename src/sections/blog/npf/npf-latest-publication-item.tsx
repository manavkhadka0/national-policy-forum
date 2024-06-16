import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import { IPublicationProps } from 'src/types/blog';

import PostTimeBlock from '../common/post-time-block';

// ----------------------------------------------------------------------

type Props = {
  publication: IPublicationProps;
};

export default function TravelLatestPublicationItem({ publication }: Props) {
  return (
    <Stack spacing={2.5}>
      <Image src={publication.cover} alt={publication.title} ratio="1/1" sx={{ borderRadius: 2 }} />

      <Stack spacing={1}>
        <PostTimeBlock created_at={fDate(publication.created_at)} duration={publication.duration} />

        <Link component={RouterLink} href={paths.publication(publication.slug)} color="inherit">
          <TextMaxLine variant="h6" persistent>
            {publication.title}
          </TextMaxLine>
        </Link>
      </Stack>

      <Stack spacing={1} direction="row" alignItems="center">
        <Avatar src={publication.author.avatar} sx={{ width: 32, height: 32 }} />
        <Typography variant="body2">{publication.author.name}</Typography>
      </Stack>
    </Stack>
  );
}
