import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
} from "@chakra-ui/react";

import { useCart } from "../../../providers";
import { LinkButton } from "../../LinkButton";
import { CartListForm } from "./components";

export const CartDrawer = ({ onCloseDrawer }) => {
  const { products } = useCart();

  return (
    <Drawer isOpen placement="right" size="md" onClose={onCloseDrawer}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your cart</DrawerHeader>
        <DrawerBody overflow="auto">
          <CartListForm products={products} />
        </DrawerBody>
        <DrawerFooter>
          <LinkButton to="/order-checkout" colorScheme="blue">
            Continue to checkout
          </LinkButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
