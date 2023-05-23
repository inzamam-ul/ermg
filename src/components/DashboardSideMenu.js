import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

import { useAuth } from "../providers";
import { NotificationTag, LinkButton, getAuthLinks } from ".";

export const DashboardSideMenu = () => {
  const { user } = useAuth();

  const links = getAuthLinks(user.role);

  return (
    <Box h="100%" w="100%" py={2} px={4} bg="gray.100">
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
    </Box>
  );
};
