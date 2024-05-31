import Box from '@mui/material/Box';
import Stack from '@mui/system/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton/IconButton';

import { _socials } from 'src/_mock';

import Iconify from 'src/components/iconify/iconify';

const Banner = () => {
  const int = 0;

  return (
    <Box sx={{ py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="body1">Banner {int}</Typography>
      
    </Box>
  );
};

export default Banner;
