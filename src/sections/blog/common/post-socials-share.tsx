import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Share from 'src/components/share';

type ShareProps = {
  quote?: string;
  hashtag?: string;
  longButtons?: boolean;
};

// ----------------------------------------------------------------------

export default function PostSocialsShare({ hashtag, quote, longButtons = false }: ShareProps) {
  return (
    <Stack direction="row" sx={{ mt: 5 }}>
      {longButtons && (
        <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
          Share:
        </Typography>
      )}

      <Stack direction="row" alignItems="center" flexWrap="wrap">
        <Share
          url={`${window.location.origin}${window.location.pathname}`}
          hashtag={hashtag}
          quote={quote}
          longButtons={longButtons}
        />
      </Stack>
    </Stack>
  );
}