import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { _mock } from 'src/_mock';
import { Category } from 'src/actions/faq';

import Image from 'src/components/image';
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

const CATEGORIES = [
  'Marketing',
  'Community',
  'Tutorials',
  'Business',
  'Management',
  'Sports',
  'Travel',
  'Design',
];

export const TOPICS = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  cover: _mock.image.travel(index + 4),
  totalPost: index + 10,
  category: CATEGORIES[index],
}));

// ----------------------------------------------------------------------

type Props = {
  topic: Category;
};

export default function TravelTrendingTopicItem({ topic }: Props) {
  const theme = useTheme();

  return (
    <Box
      component={m.div}
      whileHover="hover"
      variants={varHover(1)}
      transition={varTranHover()}
      sx={{ px: 1.5, cursor: 'pointer' }}
    >
      <Box sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
        <Stack
          spacing={0.5}
          sx={{
            py: 3,
            width: 1,
            zIndex: 9,
            bottom: 0,
            textAlign: 'center',
            position: 'absolute',
            color: 'common.white',
          }}
        >
          <m.div variants={varHover(1.05)} transition={varTranHover()}>
            <Typography variant="h6">{topic.name}</Typography>
          </m.div>

          {/* <Typography variant="caption" sx={{ opacity: 0.72 }}>
            {topic.description}
          </Typography> */}
        </Stack>

        <m.div variants={varHover(1.25)} transition={varTranHover()}>
          <Image
            alt={topic.description}
            src={topic.category_thumbnail}
            ratio="4/3"
            overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
              theme.palette.common.black
            } 75%)`}
          />
        </m.div>
      </Box>
    </Box>
  );
}
