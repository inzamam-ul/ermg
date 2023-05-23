import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';
import homeFill from '@iconify/icons-eva/home-fill';
import personFill from '@iconify/icons-eva/person-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import {
  Button,
  Box,
  Divider,
  MenuItem,
  Typography,
  Avatar,
  IconButton,
  Badge,
} from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
//
import account from '../../_mocks_/account';
import { useAuth } from '../../../../lib/auth';
import axios from 'axios';
import badgeImage from '../../../Dashboard/views/UserProfile/check.png'

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: homeFill,
    linkTo: '/admin',
  },
  {
    label: 'Profile',
    icon: personFill,
    linkTo: '/admin/profile',
  },
  {
    label: 'Settings',
    icon: settings2Fill,
    linkTo: '/admin/settings',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: theme => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
      >
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
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map(option => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24,
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button onClick={logOut} fullWidth color="inherit" variant="outlined">
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
