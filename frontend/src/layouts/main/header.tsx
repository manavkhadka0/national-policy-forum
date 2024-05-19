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

import { _mock, _socials } from 'src/_mock';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify/iconify';
import Scrollbar from 'src/components/scrollbar/scrollbar';
import MegaMenuMobile from 'src/components/mega-menu/mobile/mega-menu-mobile';
import MegaMenuDesktopHorizontal from 'src/components/mega-menu/horizontal/mega-menu-desktop-horizontal';

import NavMobile from './nav/mobile';
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import HeaderShadow from '../common/header-shadow';

// ----------------------------------------------------------------------

type Props = {
  headerOnDark: boolean;
};

export default function Header({ headerOnDark }: Props) {
  const theme = useTheme();

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
        {mdUp && <MegaMenuDesktopHorizontal data={NAV_ITEMS} />}

        <Stack
        sx={{ display: { xs: 'none', md: 'flex' } }}
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
      >
          <Stack direction="row">
            {_socials.map((social) => (
              <IconButton key={social.value} color="inherit">
                <Iconify icon={social.icon} />
              </IconButton>
            ))}
        </Stack>
      </Stack>
</>     

  );

  const renderMobile = (
    <>
      <Button
        color="inherit"
        variant="contained"
        onClick={mobileOpen.onTrue}
        startIcon={<Iconify icon="carbon:menu" />}
      >
        Menu Mobile
      </Button>

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

          <MegaMenuMobile data={NAV_ITEMS} />
        </Scrollbar>
      </Drawer>
    </>
  );

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
           <Box sx={{ lineHeight: 0, position: 'relative' }}>
        <Logo />
        </Box>
          {mdUp ? renderHorizontal : renderMobile}
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
    icon: <Iconify icon="carbon:home" sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'About',
    path: '#',
    icon: <Iconify icon="carbon:building" sx={{ width: 1, height: 1 }} />,
    // products: [...Array(10)].map((_, index) => ({
    //   name: _mock.productName(index),
    //   coverUrl: _mock.image.product(index),
    //   path: '#',
    // })),
    moreLink: {
      title: 'More Categories',
      path: '#',
    },
    tags: [
      { title: 'Paper Cup', path: '#' },
      { title: 'Lotion Pump', path: '#' },
      { title: 'Brush Cutter', path: '#' },
      { title: 'Display Rack', path: '#' },
      { title: 'Glass Bottle', path: '#' },
    ],
    children: [
      {
        subheader: 'Organization',
        items: [
          {title : 'About Organization', path: '#'},
        ],
      },
      {
        subheader: 'Our Teams',
        items: [
          {title : 'Board of Directors', path: '#'},
          {title : 'Advisory Board', path: '#' },
          {title : 'Founders', path: '#'},
          {title : 'Members', path: '#'},
        ],
      },
      {
        subheader: 'Construction Machinery',
        items: [
          { title: 'Building Material Making Machinery', path: '#' },
          { title: 'Lifting Equipment', path: '#' },
          { title: 'Excavator', path: '#' },
          { title: 'Concrete Machinery', path: '#' },
          { title: 'Stone Processing Machinery', path: '#' },
        ],
      },
      {
        subheader: 'Agriculture Machinery',
        items: [
          { title: 'Agriculture Machinery', path: '#' },
          { title: 'Livestock MachineryFeed', path: '#' },
          { title: 'Feed Processing Machinery', path: '#' },
          { title: 'Tiller', path: '#' },
          { title: 'Harvesting Machine', path: '#' },
        ],
      },
      {
        subheader: 'Machine Tools',
        items: [
          { title: 'CNC Machine Tools', path: '#' },
          { title: 'Lathe', path: '#' },
          { title: 'Grinding Machine ', path: '#' },
          { title: 'Drilling Machine ', path: '#' },
          { title: 'Milling Machine ', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Research',
    path: '#',
    icon: <Iconify icon="carbon:folder" sx={{ width: 1, height: 1 }} />,
    moreLink: {
      title: 'More Research Papers',
      path: '#',
    },
    children: [
      {
        subheader: 'Other Machinery & Parts',
        items: [
          { title: 'Metallic Processing Machinery', path: '#' },
          { title: 'Machinery for Food, Beverage & Cereal', path: '#' },
          { title: 'Laser Equipment', path: '#' },
          { title: 'Mould', path: '#' },
          { title: 'Textile Machinery & Parts', path: '#' },
          { title: 'Cutting & Fold-bend Machine', path: '#' },
          { title: 'Paper Machinery', path: '#' },
          { title: 'Rubber Machinery', path: '#' },
          { title: 'Chemical Equipment & Machinery', path: '#' },
          { title: 'Mixing Equipment', path: '#' },
          { title: 'Machinery for Garment, Shoes & Accessories', path: '#' },
          { title: 'Crushing & Culling Machine', path: '#' },
        ],
      },
      {
        subheader: 'Plastic & Woodworking',
        items: [
          { title: 'Plastic Machinery', path: '#' },
          { title: 'Woodworking Machinery', path: '#' },
          { title: 'Blow Molding Machine', path: '#' },
          { title: 'Plastic Recycling Machine', path: '#' },
          { title: 'Injection Molding Machine', path: '#' },
        ],
      },
      {
        subheader: 'Construction Machinery',
        items: [
          { title: 'Building Material Making Machinery', path: '#' },
          { title: 'Lifting Equipment', path: '#' },
          { title: 'Excavator', path: '#' },
          { title: 'Concrete Machinery', path: '#' },
          { title: 'Stone Processing Machinery', path: '#' },
        ],
      },
      {
        subheader: 'Agriculture Machinery',
        items: [
          { title: 'Agriculture Machinery', path: '#' },
          { title: 'Livestock MachineryFeed', path: '#' },
          { title: 'Feed Processing Machinery', path: '#' },
          { title: 'Tiller', path: '#' },
          { title: 'Harvesting Machine', path: '#' },
        ],
      },
      {
        subheader: 'Machine Tools',
        items: [
          { title: 'CNC Machine Tools', path: '#' },
          { title: 'Lathe', path: '#' },
          { title: 'Grinding Machine ', path: '#' },
          { title: 'Drilling Machine ', path: '#' },
          { title: 'Milling Machine ', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Publications',
    path: '#',
    icon: <Iconify icon="carbon:document" sx={{ width: 1, height: 1 }} />,
    children: [
      {
        subheader: '',
        items: [
          { title: 'Metallic Processing Machinery', path: '#' },
          { title: 'Machinery for Food, Beverage & Cereal', path: '#' },
          { title: 'Laser Equipment', path: '#' },
          { title: 'Mould', path: '#' },
          { title: 'Textile Machinery & Parts', path: '#' },
          { title: 'Cutting & Fold-bend Machine', path: '#' },
          { title: 'Paper Machinery', path: '#' },
          { title: 'Rubber Machinery', path: '#' },
          { title: 'Chemical Equipment & Machinery', path: '#' },
          { title: 'Mixing Equipment', path: '#' },
          { title: 'Machinery for Garment, Shoes & Accessories', path: '#' },
          { title: 'Crushing & Culling Machine', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'People',
    path: '#',
    icon: <Iconify icon="carbon:user" sx={{ width: 1, height: 1 }} />,
    children: [
      {
        subheader: '',
        items: [
          { title: 'Metallic Processing Machinery', path: '#' },
          { title: 'Machinery for Food, Beverage & Cereal', path: '#' },
          { title: 'Laser Equipment', path: '#' },
          { title: 'Mould', path: '#' },
          { title: 'Textile Machinery & Parts', path: '#' },
          { title: 'Cutting & Fold-bend Machine', path: '#' },
          { title: 'Paper Machinery', path: '#' },
          { title: 'Rubber Machinery', path: '#' },
          { title: 'Chemical Equipment & Machinery', path: '#' },
          { title: 'Mixing Equipment', path: '#' },
          { title: 'Machinery for Garment, Shoes & Accessories', path: '#' },
          { title: 'Crushing & Culling Machine', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Events',
    path: '#',
    icon: <Iconify icon="carbon:event" sx={{ width: 1, height: 1 }} />,
    children: [
      {
        subheader: '',
        items: [
          { title: 'Metallic Processing Machinery', path: '#' },
          { title: 'Machinery for Food, Beverage & Cereal', path: '#' },
          { title: 'Laser Equipment', path: '#' },
          { title: 'Mould', path: '#' },
          { title: 'Textile Machinery & Parts', path: '#' },
          { title: 'Cutting & Fold-bend Machine', path: '#' },
          { title: 'Paper Machinery', path: '#' },
          { title: 'Rubber Machinery', path: '#' },
          { title: 'Chemical Equipment & Machinery', path: '#' },
          { title: 'Mixing Equipment', path: '#' },
          { title: 'Machinery for Garment, Shoes & Accessories', path: '#' },
          { title: 'Crushing & Culling Machine', path: '#' },
        ],
      },
    ],
  },
];