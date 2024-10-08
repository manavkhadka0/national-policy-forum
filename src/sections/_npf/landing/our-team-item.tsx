import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { bgGradient } from 'src/theme/css';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varHover, varTranHover } from 'src/components/animate';

import { IOurTeamProps } from 'src/types/team';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${alpha(theme.palette.common.black, 0.5)} 95%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  opacity: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  transition: theme.transitions.create('opacity', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  '&:hover': { opacity: 1 },
}));

// ----------------------------------------------------------------------

interface TeamMarketingMemberProps extends StackProps {
  member: IOurTeamProps;
}

export default function OurTeamItem({ member, ...other }: TeamMarketingMemberProps) {
  const { name, role, photo, id } = member;

  const _socials = [
    {
      value: 'facebook',
      label: 'FaceBook',
      icon: 'carbon:logo-facebook',
      color: '#fff',
      path: member.facebook,
    },
    {
      value: 'instagram',
      label: 'Instagram',
      icon: 'carbon:logo-instagram',
      color: '#fff',
      path: member.instagram,
    },
    {
      value: 'linkedin',
      label: 'Linkedin',
      icon: 'carbon:logo-linkedin',
      color: '#fff',
      path: member.linkedin,
    },
    {
      value: 'twitter',
      label: 'Twitter',
      icon: 'arcticons:x-twitter',
      color: '#fff',
      path: member.twitter,
    },
  ];

  return (
    <Link component={RouterLink} href={paths.teamMemberDetail(id)}>
      <Stack {...other}>
        <Box
          component={m.div}
          whileHover="hover"
          variants={varHover(0.95)}
          transition={varTranHover()}
          sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
        >
          <StyledOverlay>
            <Stack
              direction="row"
              justifyContent="center"
              sx={{ width: 1, zIndex: 9999, bottom: 24, position: 'absolute' }}
            >
              {_socials.map((social) => {
                if (!social.path) {
                  return null;
                }
                return (
                  <Link target="_blank" href={social.path || '#'} key={social.value}>
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
          </StyledOverlay>

          <m.div variants={varHover(1.15)} transition={varTranHover()}>
            <Image src={photo} alt={name} ratio="1/1" />
          </m.div>
        </Box>

        <Stack spacing={0.5} sx={{ mt: 2.5, textAlign: 'left' }}>
          <Stack direction="row" alignItems="center" gap={2}>
            <Typography variant="h6">{name}</Typography>
            <IconButton size="small">
              <Iconify icon="fluent:open-16-filled" />
            </IconButton>
          </Stack>

          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            {role}
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
}
