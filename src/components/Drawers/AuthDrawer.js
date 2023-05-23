import React from "react";
import {
  Drawer,
  Stack,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
  Button,
  Text,
} from "@chakra-ui/react";

import { LinkButton, NotificationTag } from "../";
import { useAuth } from "../../providers";
import { isSupplier } from "../../utils";

const supplierLinks = [{ text: "My Catalog", to: "/catalog" }];
const buyerLinks = [{ text: "Find Products", to: "/find-products" }];

export const getAuthLinks = (userRole) => {
  const dashBoardRoute = `/dashboard/${userRole}`;

  const routes = [
    { text: "Dashboard", to: dashBoardRoute },
    { text: "Orders", to: "/orders" },
    { text: "Saved Products", to: "/saved-products" },
    { text: "View Account", to: "/account" },
    { text: "Messages", to: "/messages" },
    // { text: "Timelines", to: "/timelines" },
  ];

  if (isSupplier([userRole])) {
    return routes.concat(supplierLinks);
  } else {
    return routes.concat(buyerLinks);
  }
};

export const AuthDrawer = (props) => {
  const { logout, user } = useAuth();

  const links = getAuthLinks(user.role);

  return (
    <Drawer isOpen placement="right" onClose={props.onCloseDrawer}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader />
        <DrawerBody>
          <Stack>
            {links.map(({ text, to }) => {
              const isMessage = text === "Messages";
              const showNotification = isMessage && user.new_messages;

              return (
                <LinkButton key={to} to={to} justifyContent="left">
                  <Text as="span">{text}</Text>
                  {showNotification && <NotificationTag />}
                </LinkButton>
              );
            })}
          </Stack>
        </DrawerBody>
        <DrawerFooter>
          <Button onClick={logout}>Logout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
