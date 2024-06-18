import Link from '@mui/material/Link';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

import { NavSubListProps } from './nav/types';
import { pageLinks, navConfig } from './config-navigation';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
export const socials = [
  {
    value: 'facebook',
    label: 'FaceBook',
    icon: 'carbon:logo-facebook',
    color: '#1877F2',
    link: 'https://www.facebook.com/profile.php?id=61555066314243',
  },
  {
    value: 'instagram',
    label: 'Instagram',
    icon: 'carbon:logo-instagram',
    color: '#E02D69',
    link: 'https://www.instagram.com/nnpolicyforum/',
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    icon: 'carbon:logo-linkedin',
    color: '#007EBB',
    link: ' https://www.linkedin.com/company/99445568/admin/feed/posts/',
  },
  {
    value: 'twitter',
    label: 'Twitter',
    icon: 'arcticons:x-twitter',
    color: '#00AAEC',
    link: 'https://twitter.com/nnpolicyforum',
  },
];
export default function Footer() {
  const mdUp = useResponsive('up', 'md');

  const mobileList = navConfig.find((i) => i.title === 'Pages')?.children || [];

  const desktopList = pageLinks.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  const renderLists = mdUp ? desktopList : mobileList;

  const mainFooter = (
    <>
      <Divider />

      <Container
        sx={{
          overflow: 'hidden',
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
          <Grid xs={12} md={4}>
            <Stack spacing={{ xs: 3, md: 5 }}>
              <Stack alignItems="flex-start" spacing={3}>
                <Logo />

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  National Policy Forum is a non-profit organization that aims to provide a platform
                  for discussion and debate on policy issues in Nepal. We are a group of young
                  professionals committed to promoting evidence-based policy making in Nepal.
                </Typography>
              </Stack>

              <Stack spacing={2}>
                <Stack spacing={1}>
                  <Typography variant="h6">Let’s stay in touch</Typography>
                  <Link href="mailto:nnopolicyforum@gmail.com" color="inherit">
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      nnpolicyforum@gmail.com
                    </Typography>
                  </Link>
                  <Link href="tel:+977-9767276347" color="inherit">
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      +977-9767276347
                    </Typography>
                  </Link>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Bharatpur, Chitwan, Nepal
                  </Typography>
                </Stack>
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h6">Socials</Typography>
                <Stack direction="row" alignItems="center">
                  {socials.map((social) => (
                    <IconButton key={social.value} color="primary">
                      <Link href={social.link}>
                        <Iconify icon={social.icon} />
                      </Link>
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            {mdUp ? (
              <Masonry columns={4} spacing={2} defaultColumns={4} defaultSpacing={2}>
                {renderLists.map((list) => (
                  <ListDesktop key={list.subheader} list={list} />
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {renderLists.map((list) => (
                  <ListMobile key={list.subheader} list={list} />
                ))}
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container>
        <Stack
          spacing={2.5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: 'center' }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()}. All rights reserved National Policy Forum
          </Typography>

          <Stack direction="row" spacing={3} justifyContent="center">
            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              Privacy Policy
            </Link>

            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              Terms and Conditions
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );

  return <footer>{mainFooter}</footer>;
}

// ----------------------------------------------------------------------

export function ListDesktop({ list }: { list: NavSubListProps }) {
  const pathname = usePathname();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="subtitle2">{list.subheader}</Typography>

      {list.items?.map((link) => {
        const active = pathname === link.path || pathname === `${link.path}/`;

        return (
          <Link
            component={RouterLink}
            key={link.title}
            href={link.path}
            variant="caption"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'text.primary',
              },
              ...(active && {
                color: 'text.primary',
                fontWeight: 'fontWeightSemiBold',
              }),
            }}
          >
            {link.title}
          </Link>
        );
      })}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function ListMobile({ list }: { list: NavSubListProps }) {
  const pathname = usePathname();

  const listExpand = useBoolean();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="subtitle2"
        onClick={listExpand.onToggle}
        sx={{
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {list.subheader}
        <Iconify
          width={16}
          icon={listExpand.value ? 'carbon:chevron-down' : 'carbon:chevron-right'}
          sx={{ ml: 0.5 }}
        />
      </Typography>

      <Collapse in={listExpand.value} unmountOnExit sx={{ width: 1 }}>
        <Stack spacing={1.5} alignItems="flex-start">
          {list.items?.map((link) => (
            <Link
              component={RouterLink}
              key={link.title}
              href={link.path}
              variant="caption"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'text.primary',
                },
                ...(pathname === `${link.path}/` && {
                  color: 'text.primary',
                  fontWeight: 'fontWeightSemiBold',
                }),
              }}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}

// ----------------------------------------------------------------------

// function AppStoreButton({ ...other }: StackProps) {
//   return (
//     <Stack direction="row" flexWrap="wrap" spacing={2} {...other}>
//       <StyledAppStoreButton startIcon={<Iconify icon="ri:apple-fill" width={28} />}>
//         <Stack alignItems="flex-start">
//           <Typography variant="caption" sx={{ opacity: 0.72 }}>
//             Download on the
//           </Typography>

//           <Typography variant="h6" sx={{ mt: -0.5 }}>
//             Apple Store
//           </Typography>
//         </Stack>
//       </StyledAppStoreButton>

//       <StyledAppStoreButton startIcon={<Iconify icon="logos:google-play-icon" width={28} />}>
//         <Stack alignItems="flex-start">
//           <Typography variant="caption" sx={{ opacity: 0.72 }}>
//             Download from
//           </Typography>

//           <Typography variant="h6" sx={{ mt: -0.5 }}>
//             Google Play
//           </Typography>
//         </Stack>
//       </StyledAppStoreButton>
//     </Stack>
//   );
// }
