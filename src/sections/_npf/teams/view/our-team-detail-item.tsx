import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown/markdown';

import { IOurTeamProps } from 'src/types/team';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------
type OurTeamDetailItemProps = {
  member: IOurTeamProps;
};

export default function OurTeamDetailItem({ member }: OurTeamDetailItemProps) {
  const mdUp = useResponsive('up', 'md');

  const _socials = [
    {
      value: 'facebook',
      label: 'FaceBook',
      icon: 'carbon:logo-facebook',
      color: '#1877F2',
      path: member.facebook,
    },
    {
      value: 'instagram',
      label: 'Instagram',
      icon: 'carbon:logo-instagram',
      color: '#E02D69',
      path: member.instagram,
    },
    {
      value: 'linkedin',
      label: 'Linkedin',
      icon: 'carbon:logo-linkedin',
      color: '#007EBB',
      path: member.linkedin,
    },
    {
      value: 'twitter',
      label: 'Twitter',
      icon: 'arcticons:x-twitter',
      color: '#00AAEC',
      path: member.twitter,
    },
  ];

  return (
    <Box sx={{ backgroundColor: 'background.neutral' }}>
      <Container
        sx={{
          py: { xs: 8, md: 15 },
        }}
      >
        <Grid
          container
          spacing={3}
          alignItems={{ md: 'center' }}
          justifyContent={{ md: 'space-between' }}
        >
          {mdUp && (
            <Grid xs={12} md={6} lg={5}>
              <Image alt={member.name} src={member.photo} ratio="1/1" sx={{ borderRadius: 2 }} />
              <Typography variant="h4" sx={{ mt: 3, textAlign: 'center' }}>
                {member.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 0.5, textAlign: 'center', color: 'text.secondary' }}
              >
                {member.role}
              </Typography>
            </Grid>
          )}

          <Grid xs={12} md={6} lg={6}>
            <Stack direction="row" alignItems="center">
              <Typography variant="overline">Socials: </Typography>
              {_socials.map((social) => {
                if (!social.path) {
                  return null;
                }
                return (
                  <Link target="_blank" href={social.path} key={social.value}>
                    <IconButton
                      key={social.value}
                      sx={{
                        color: social.color,
                      }}
                    >
                      <Iconify icon={social.icon} />
                    </IconButton>
                  </Link>
                );
              })}
            </Stack>
            <Markdown content={member.bio} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
