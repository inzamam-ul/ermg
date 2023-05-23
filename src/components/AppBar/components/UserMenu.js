import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../../providers';

export const UserMenu = () => {
  const { user, logout } = useAuth();
  const { push } = useHistory();

  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        transition="all 0.2s"
        rounded="md"
        borderWidth="1px"
      >
        {user.email} <Icon name="chevron-down" />
      </MenuButton>
      <MenuList>
        <MenuItem color="gray.900" onClick={() => push('/account')}>
          Profile
        </MenuItem>
        <MenuItem color="gray.900" onClick={logout}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
