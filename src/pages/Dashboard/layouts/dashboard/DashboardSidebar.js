import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import {
  Box,
  Link,
  Button,
  Drawer,
  Typography,
  Avatar,
  Stack,
  Badge,
} from '@mui/material';
// components
import Logo from '../../components/Logo';
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
import { MHidden } from '../../components/@material-extend';
//
import sidebarConfig from './SidebarConfig';
import { useAuth } from '../../../../lib/auth';
import axios from 'axios';
import badgeImage from '../../../Dashboard/views/UserProfile/check.png';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    const url = `http://localhost:4000/fetchUser/${user.email}`;
    axios.get(url).then(res => {
      if (res.data) {
        const mainObject = res.data.userInfo;

        if (
          mainObject.image &&
          mainObject.name &&
          mainObject.email &&
          mainObject.about &&
          mainObject.city &&
          mainObject.role &&
          mainObject.category &&
          mainObject.team &&
          mainObject.targetedBuyer &&
          mainObject.productLine &&
          mainObject.priceRange &&
          mainObject.coreFactorOfSourcing &&
          mainObject.country &&
          mainObject.region
        ) {
          setComplete(true);
        }
      }
    });
  }, []);

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to="/admin" sx={{ display: 'block' }}>
          <Logo />
        </Box>
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="/admin/user">
          <AccountStyle>
            <Badge
              overlap="circular"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={
                complete && (
                  <img style={{ height: '15px' }} src={badgeImage} alt="" />
                )
              }
            >
              <Avatar
          
                alt="user Image"
                src={user.photoUrl}
              />
            </Badge>
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {user.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {user.role}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{
            p: 2.5,
            pt: 5,
            borderRadius: 2,
            position: 'relative',
            bgcolor: 'grey.200',
          }}
        >
          <Box
            component="img"
            src="/static/illustrations/illustration_avatar.png"
            sx={{ width: 100, position: 'absolute', top: -50 }}
          />

          <Box sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h6">
              Get more?
            </Typography>
          </Box>

          <Button fullWidth href="/" target="_blank" variant="contained">
            Upgrade to Pro
          </Button>
        </Stack>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
            },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
