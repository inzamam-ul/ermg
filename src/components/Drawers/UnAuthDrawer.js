import React from "react";
import {
  Drawer,
  Stack,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";

import { LinkButton } from "../LinkButton";
import { useDrawer } from "../../providers";
import { DRAWER_NAMES } from "../../constants";

const unAuthLinks = [
  { text: "Login", to: "/login" },
  { text: "Register", to: "/register" },
];

export const UnAuthDrawer = () => {
  const { openDrawer, closeDrawer } = useDrawer();

  return (
    <Drawer isOpen={openDrawer === DRAWER_NAMES.UN_AUTH_DRAWER} placement="right" onClose={closeDrawer}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader />
        <DrawerBody>
          <Stack>
            {unAuthLinks.map(({ text, to }) => (
              <LinkButton key={to} to={to}>
                {text}
              </LinkButton>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
