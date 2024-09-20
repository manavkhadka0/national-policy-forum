import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { alpha, styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';

import { RouterLink } from 'src/routes/components';
import Iconify from '../../iconify';
import { NavItemProps, NavItemStateProps } from '../types';

// ----------------------------------------------------------------------

interface ExtendedNavItemProps extends NavItemProps {
  onOpenMenu?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

const NavItem = forwardRef<HTMLDivElement, ExtendedNavItemProps>(
  ({ title, path, icon, active, hasChild, externalLink, onOpenMenu, ...other }, ref) => {
    const renderContent = (
      <StyledNavItem ref={ref} active={active} {...other}>
        {icon && (
          <Box component="span" className="icon">
            {icon}
          </Box>
        )}

        <Box component="span" className="label">
          {title}
        </Box>

        {hasChild && (
          <Box
            component="span"
            className="arrow"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onOpenMenu) onOpenMenu(e);
            }}
          >
            <Iconify width={16} icon="eva:arrow-ios-forward-fill" />
          </Box>
        )}
      </StyledNavItem>
    );

    if (externalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none" color="inherit">
          {renderContent}
        </Link>
      );
    }

    if (hasChild) {
      return (
        <Link component={RouterLink} href={path} underline="none" color="inherit">
          {renderContent}
        </Link>
      );
    }

    return (
      <Link component={RouterLink} href={path} underline="none" color="inherit">
        {renderContent}
      </Link>
    );
  }
);

export default NavItem;

// ----------------------------------------------------------------------

const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<NavItemStateProps>(({ active, theme }) => ({
  ...theme.typography.body2,
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(1.5),
  fontWeight: theme.typography.fontWeightMedium,
  '& .icon': {
    width: 20,
    height: 20,
    flexShrink: 0,
    marginRight: theme.spacing(2),
  },
  '& .label': {
    flexGrow: 1,
  },
  '& .arrow': {
    marginLeft: theme.spacing(0.75),
    cursor: 'pointer',
  },
  ...(active && {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightSemiBold,
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.16),
    },
  }),
}));
