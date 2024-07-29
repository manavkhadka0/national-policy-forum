import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';

import { IBlogPostProps } from 'src/types/blog';

import PostTimeBlock from '../common/post-time-block';
import PostSocialsShare from '../common/post-socials-share';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
  updatedViewCount: number;
};

export default function NpfPostHero({ post, updatedViewCount }: Props) {
  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container>
        <Stack>
          <Image
            src={post.hero}
            alt={post.title}
            sx={{ flexGrow: 1, height: 'auto', borderRadius: 2 }}
          />

          <Stack
            spacing={1}
            sx={{
              py: { xs: 3, md: 5 },
            }}
          >
            <PostTimeBlock created_at={fDate(post.created_at)} duration={post.duration} />

            <Typography color="inherit" variant="h3">
              {post.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary', flexGrow: 1 }}>
              {post.description}
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                Share this post
              </Typography>
              <PostSocialsShare />
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ pt: 1.5, typography: 'body2' }}
            >
              <Avatar src={post.author.avatar} />
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                  {post.author.name}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {post.author.role}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
