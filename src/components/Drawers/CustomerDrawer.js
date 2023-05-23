import React from "react";
import {
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Drawer,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { useDrawer } from "../../providers";
import { LinkButton } from "../LinkButton";
import { ThingStacks } from "../../pages/LandingPage/LandingPage";

export const CustomerDrawer = () => {
  const { onCloseDrawer } = useDrawer();

  return (
    <Drawer
      style={{ height: "100vh" }}
      isOpen
      placement="right"
      size="full"
      onClose={onCloseDrawer}
    >
      <DrawerOverlay>
        <DrawerContent style={{ height: "100%", paddingBottom: 20 }}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link as={RouterLink} to="/">
              eRMG{" "}
            </Link>
          </DrawerHeader>

          <DrawerBody mt="20px">
            <ThingStacks isInline={false} align="flex-start" />
          </DrawerBody>

          <DrawerFooter>
            <LinkButton
              variant="outline"
              colorScheme="purple"
              mr={3}
              to="/login"
              size="lg"
            >
              Sign in
            </LinkButton>
            <LinkButton to="/contact" colorScheme="purple" size="lg">
              Contact
            </LinkButton>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
