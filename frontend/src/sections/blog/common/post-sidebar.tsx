import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';
import SocialLinks from 'src/components/social-links/social-links';

import { IAuthorProps } from 'src/types/author';
import { IBlogPostProps } from 'src/types/blog';

import PostItemMobile from './post-item-mobile';
import Advertisement, { AdvertisementProps } from '../../advertisement';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  author?: IAuthorProps;
  popularTags?: string[];
  categories?: string[];
  advertisement?: AdvertisementProps;
  recentPosts?: {
    list: IBlogPostProps[];
  };
}

export default function PostSidebar({
  author,
  categories,
  popularTags,
  recentPosts,
  advertisement,
  sx,
  ...other
}: Props) {
  const mdUp = useResponsive('up', 'md');

  const renderAuthor = author && (
    <Stack spacing={2} direction="row" sx={{ mb: { md: 5 } }}>
      <Avatar src={author.avatar} sx={{ width: 64, height: 64 }} />

      <Stack>
        <Typography variant="h5">{author.name}</Typography>

        <Typography variant="body2" sx={{ mt: 0.5, mb: 2, color: 'text.secondary' }}>
          {author.role}
        </Typography>

        <SocialLinks socialLinks={author.social_links} />
      </Stack>
    </Stack>
  );

  const renderCategories = categories && (
    <Stack spacing={1}>
      <Typography variant="h5" gutterBottom>
        Popular Categories
      </Typography>

      {categories.map((category) => (
        <Stack key={category} direction="row" alignItems="center">
          <Box
            sx={{
              mr: 2,
              width: 6,
              height: 6,
              borderRadius: '50%',
              bgcolor: 'primary.main',
            }}
          />

          <Link variant="body2" href="#" color="inherit">
            {category}
          </Link>
        </Stack>
      ))}
    </Stack>
  );

  const renderRecentPosts = recentPosts && (
    <Stack spacing={3}>
      <Typography variant="h5">Recent Posts</Typography>

      {recentPosts.list.map((post) => (
        <PostItemMobile key={post.id} post={post} onSiderbar />
      ))}
    </Stack>
  );

  const renderPopularTags = popularTags && (
    <Stack spacing={3}>
      <Typography variant="h5">Popular Tags</Typography>

      <Stack direction="row" flexWrap="wrap" spacing={1}>
        {popularTags.map((tag) => (
          <Chip key={tag} label={tag} variant="soft" size="small" onClick={() => {}} />
        ))}
      </Stack>
    </Stack>
  );

  return (
    <>
      {mdUp && renderAuthor}

      {mdUp && (
        <TextField
          fullWidth
          hiddenLabel
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}

      <Stack
        spacing={5}
        sx={{
          pt: { md: 5 },
          pb: { xs: 8, md: 8 },
          ...sx,
        }}
        {...other}
      >
        {renderCategories}

        {renderRecentPosts}

        {renderPopularTags}

        {advertisement && <Advertisement advertisement={advertisement} />}
      </Stack>
    </>
  );
}
