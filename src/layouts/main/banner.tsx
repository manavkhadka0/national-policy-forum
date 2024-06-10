import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Banner = () => {
  const int = 0;

  return (
    <Box sx={{ py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="body1">Banner {int}</Typography>
    </Box>
  );
};

export default Banner;
