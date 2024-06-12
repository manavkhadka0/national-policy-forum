import { usePathname } from 'next/navigation';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Share from 'src/components/share';
import { HOST_API } from 'src/config-global';

type ShareProps = {
  quote?: string;
  hashtag?: string;
  longButtons?: boolean;
};

// ----------------------------------------------------------------------

export default function PostSocialsShare({ hashtag, quote, longButtons = false }: ShareProps) {
  const pathname = usePathname();
  return (
    <Stack direction="row" sx={{ mt: 5 }}>
      {longButtons && (
        <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
          Share:
        </Typography>
      )}

      <Stack direction="row" alignItems="center" flexWrap="wrap">
        <Share
          url={`${HOST_API}${pathname}`}
          hashtag={hashtag}
          quote={quote}
          longButtons={longButtons}
        />
      </Stack>
    </Stack>
  );
}
