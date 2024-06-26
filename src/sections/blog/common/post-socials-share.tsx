import { usePathname } from 'next/navigation';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { FRONTEND_URL } from 'src/config-global';

import Share from 'src/components/share';

type ShareProps = {
  quote?: string;
  hashtag?: string;
  longButtons?: boolean;
};

// ----------------------------------------------------------------------

export default function PostSocialsShare({ hashtag, quote, longButtons = false }: ShareProps) {
  const pathname = usePathname();
  return (
    <Stack direction="row">
      {longButtons && (
        <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
          Share:
        </Typography>
      )}

      <Share
        url={`${FRONTEND_URL}${pathname}`}
        hashtag={hashtag}
        quote={quote}
        longButtons={longButtons}
      />
    </Stack>
  );
}
