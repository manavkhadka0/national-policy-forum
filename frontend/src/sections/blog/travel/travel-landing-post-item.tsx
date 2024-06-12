import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import TextMaxLine from 'src/components/text-max-line';

import { IBlogPostProps } from 'src/types/blog';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function TravelLandingPostItem({ post }: Props) {
  return (
    <div>
      <Typography variant="caption" sx={{ color: 'secondary.main' }}>
        {fDate(post.created_at)}
      </Typography>

      <Link component={RouterLink} href={paths.post(post.slug)} sx={{ color: 'common.white' }}>
        <TextMaxLine variant="h4" sx={{ mt: 1, mb: 2 }}>
          {post.title}
        </TextMaxLine>
      </Link>

      <TextMaxLine variant="body1" sx={{ color: 'text.secondary' }}>
        {post.description}
      </TextMaxLine>

      <Divider sx={{ borderStyle: 'dashed', mt: 3 }} />
    </div>
  );
}
