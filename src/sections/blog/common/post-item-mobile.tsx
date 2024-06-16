import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import { IBlogPostProps } from 'src/types/blog';

import PostTimeBlock from './post-time-block';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
  onSiderbar?: boolean;
};

export default function PostItemMobile({ post, onSiderbar }: Props) {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={{ xs: 'flex-start', md: 'unset' }}
      sx={{ width: 1 }}
    >
      <Image
        alt={post.title}
        src={post.cover}
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
        }}
      />

      <Stack spacing={onSiderbar ? 0.5 : 1}>
        <Link component={RouterLink} href={paths.post(post.slug)} color="inherit">
          <TextMaxLine variant="h6" persistent>
            {post.title}
          </TextMaxLine>
        </Link>

        <PostTimeBlock created_at={fDate(post.created_at)} duration={post.duration} />
      </Stack>
    </Stack>
  );
}
