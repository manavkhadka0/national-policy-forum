'use client';

import { Box, alpha, IconButton } from '@mui/material';

import { useOffSetTop } from 'src/hooks/use-off-set-top';

import Iconify from '../iconify';

export default function ScrollToTop() {
  const isBrowser = () => typeof window !== 'undefined'; // The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const offset = useOffSetTop(200);

  if (!offset) return null;

  return (
    <Box sx={{ position: 'fixed', right: 24, bottom: 24, zIndex: 9999 }}>
      <IconButton
        size="large"
        onClick={() => scrollToTop()}
        sx={{
          bottom: 24,
          right: 24,
          zIndex: 9,
          position: 'fixed',
          color: (theme) => alpha(theme.palette.common.white, 1),
          bgcolor: (theme) => alpha(theme.palette.common.black, 1),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.common.black, 0.66),
          },
        }}
      >
        <Iconify icon="carbon:arrow-up" width={24} />
      </IconButton>
    </Box>
  );
}
