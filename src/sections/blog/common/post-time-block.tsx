import Box from '@mui/material/Box';
import Stack, { StackProps } from '@mui/material/Stack';

import { fDate } from 'src/utils/format-time';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  created_at: string;
  duration?: string;
  viewsCount?: number | null;
}

export default function PostTimeBlock({ created_at, duration, viewsCount, sx, ...other }: Props) {
  return (
    <Stack
      flexWrap="wrap"
      direction="row"
      alignItems="center"
      sx={{ typography: 'caption', color: 'text.disabled', ...sx }}
      {...other}
    >
      {fDate(created_at)}

      {duration && (
        <>
          <Box
            component="span"
            sx={{
              mx: 1,
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: 'currentColor',
            }}
          />

          {duration}
        </>
      )}
      {viewsCount && (
        <>
          <Box
            component="span"
            sx={{
              mx: 1,
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: 'currentColor',
            }}
          />
          {viewsCount} views
        </>
      )}
    </Stack>
  );
}
