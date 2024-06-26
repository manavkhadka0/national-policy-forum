/* eslint-disable no-nested-ternary */
import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { Button, IconButton } from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { useGetNavlinks } from 'src/api/navlinks';
import { WEBSITE_CONFIG } from 'src/config-global';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify/iconify';
import Scrollbar from 'src/components/scrollbar/scrollbar';
import MegaMenuMobile from 'src/components/mega-menu/mobile/mega-menu-mobile';
import MegaMenuDesktopHorizontal from 'src/components/mega-menu/horizontal/mega-menu-desktop-horizontal';

import { HEADER } from '../config-layout';
import HeaderShadow from '../common/header-shadow';

// ----------------------------------------------------------------------

type Props = {
  headerOnDark: boolean;
};

export default function Header({ headerOnDark }: Props) {
  const theme = useTheme();

  const { navlinks, navlinksLoading } = useGetNavlinks();

  // change Nav Items to  nav items with publication and add publications to the nav items
  const NAV_ITEMS_WITH_PUBLICATIONS = NAV_ITEMS.map((item) => {
    if (item.title === 'Publications') {
      return {
        ...item,
        children: [
          {
            subheader: 'Latest Publications',
            items: navlinks.publication?.latest_publications.map((publication) => ({
              title: publication.title,
              path: publication.path,
            })),
          },
          {
            subheader: 'Featured Publications',
            items: navlinks.publication?.featured_publications.map((publication) => ({
              title: publication.title,
              path: publication.path,
            })),
          },
        ],
      };
    }
    if (item.title === 'Events') {
      return {
        ...item,
        children: [
          {
            subheader: '',
            items: navlinks.event?.latest_events.map((event) => ({
              title: event.title,
              path: event.path,
            })),
          },
        ],
      };
    }
    if (item.title === 'Blogs') {
      return {
        ...item,
        children: [
          {
            subheader: 'Latest Blogs',
            items: navlinks.blog?.latest_blogs.map((blog) => ({
              title: blog.title,
              path: blog.path,
            })),
          },
          {
            subheader: 'Featured Blogs',
            items: navlinks.blog?.featured_blogs.map((blog) => ({
              title: blog.title,
              path: blog.path,
            })),
          },
        ],
      };
    }
    if (item.title === 'About') {
      return {
        ...item,
        children: [
          {
            subheader: 'Organization',
            items: [{ title: 'About Organization', path: '/organization' }],
          },
          {
            subheader: 'Our Teams',
            items: navlinks.our_team?.roles.map((role) => ({
              title: role.name,
              path: role.path,
            })),
          },
        ],
      };
    }
    if (item.title === 'Opportunities') {
      const opportunityTypes = navlinks.opportunity?.opportunity_types?.children || [];
      const latestOpportunities =
        navlinks.opportunity?.latest_opportunities?.map((opportunity) => ({
          title: opportunity.title,
          path: opportunity.path,
        })) || [];

      return {
        ...item,
        children: [
          {
            subheader: 'Latest Opportunities',
            items: latestOpportunities,
          },
          ...opportunityTypes,
        ],
      };
    }

    return item;
  });

  const pathname = usePathname();

  const offset = useOffSetTop(50);

  const mdUp = useResponsive('up', 'md');

  const mobileOpen = useBoolean();

  useEffect(() => {
    if (mobileOpen) {
      mobileOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderHorizontal = (
    <>
      {mdUp && <MegaMenuDesktopHorizontal data={NAV_ITEMS_WITH_PUBLICATIONS} />}

      <Stack
        sx={{ display: { xs: 'none', md: 'flex' } }}
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Stack direction="row">
          {WEBSITE_CONFIG.socials.map((social) => (
            <Link key={social.label} target="_blank" rel="noopener noreferrer" href={social.link}>
              <IconButton
                key={social.value}
                sx={{
                  color:
                    headerOnDark && !offset
                      ? 'common.white'
                      : !headerOnDark && offset
                        ? social.color
                        : 'common.black',
                }}
              >
                <Iconify icon={social.icon} />
              </IconButton>
            </Link>
          ))}
        </Stack>
      </Stack>
    </>
  );

  const renderMobile = (
    <>
      <Button
        color="inherit"
        variant="text"
        onClick={mobileOpen.onTrue}
        startIcon={<Iconify icon="carbon:menu" />}
      />

      <Drawer
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{
          sx: {
            pb: 5,
            width: 260,
          },
        }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />

          <MegaMenuMobile data={NAV_ITEMS_WITH_PUBLICATIONS} />
        </Scrollbar>
      </Drawer>
    </>
  );

  if (navlinksLoading) {
    return null;
  }

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          flexDirection: 'column',
          display: 'flex',
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            bgcolor: theme.palette.background.default,
            color: 'text.default',
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 1,
          }}
        >
          {mdUp && (
            <Box sx={{ lineHeight: 0, position: 'relative' }}>
              <Logo />
            </Box>
          )}
          {mdUp ? renderHorizontal : renderMobile}
          {!mdUp && (
            <Box sx={{ lineHeight: 0, position: 'relative' }}>
              <Logo />
            </Box>
          )}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}

const NAV_ITEMS = [
  {
    title: 'Home',
    path: '/',
    // icon: <Iconify icon="carbon:home" sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'About',
    path: '#',
    // icon: <Iconify icon="carbon:building" sx={{ width: 1, height: 1 }} />,
    // products: [...Array(10)].map((_, index) => ({
    //   name: _mock.productName(index),
    //   cover: _mock.image.product(index),
    //   path: '#',
    // })),
    // moreLink: {
    //   title: 'More Categories',
    //   path: '#',
    // },
    // tags: [
    //   { title: 'Paper Cup', path: '#' },
    //   { title: 'Lotion Pump', path: '#' },
    //   { title: 'Brush Cutter', path: '#' },
    //   { title: 'Display Rack', path: '#' },
    //   { title: 'Glass Bottle', path: '#' },
    // ],
    children: [
      {
        subheader: 'Organization',
        items: [{ title: 'About Organization', path: '/organization' }],
      },
      {
        subheader: 'Our Teams',
        items: [],
      },
    ],
  },
  {
    title: 'Blogs',
    path: '/posts',
    // icon: <Iconify icon="carbon:folder" sx={{ width: 1, height: 1 }} />,
    moreLink: {
      title: 'More Blog Articles',
      path: '/posts',
    },
    children: [],
  },
  {
    title: 'Publications',
    path: '/publications',
    // icon: <Iconify icon="carbon:document" sx={{ width: 1, height: 1 }} />,
    moreLink: {
      title: 'More Publications',
      path: '/publications',
    },
    children: [],
  },
  {
    title: 'Events',
    path: '/events',
    // icon: <Iconify icon="carbon:api" sx={{ width: 1, height: 1 }} />,
    moreLink: {
      title: 'More Events',
      path: '/events',
    },
    children: [
      {
        subheader: '',
        items: [],
      },
    ],
  },
  {
    title: 'Opportunities',
    path: '/opportunities',
    // icon: <Iconify icon="carbon:connect" sx={{ width: 1, height: 1 }} />,
    moreLink: {
      title: 'More Opportunities',
      path: '/opportunities',
    },
    children: [],
  },
  {
    title: 'Careers',
    path: '/careers',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Donation',
    path: '/coming-soon',
  },
];
