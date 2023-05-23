import React from "react";
import { Flex, IconButton, Image, Button } from "@chakra-ui/react";
import { useMedia } from "react-media";
import { FiMenu } from "react-icons/fi";
import { BsBagFill } from "react-icons/bs";

import { useDrawer, useCart, useAuth } from "../../providers";
import { GLOBAL_MEDIA_QUERIES, DRAWER_NAMES } from "../../constants";
import { UserMenu } from "./components";
import Logo from "../../assets/img/logo-light.png";
import { isBuyer } from "../../utils";

export const AuthAppBar = (props) => {
  const { onOpenDrawer } = useDrawer();
  const { small, medium } = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const { products } = useCart();
  const { user } = useAuth();

  const smallOrMedium = small || medium;

  const productsCount = products.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="purple.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Image rounded="full" maxW="150px" h="auto" src={Logo} alt="Logo" mr={2} />
      </Flex>
      <Flex>
        {isBuyer([user.role]) && (
          <Button
            onClick={() => onOpenDrawer(DRAWER_NAMES.CART_DRAWER)}
            variant="ghost"
            leftIcon={<BsBagFill />}
            isDisabled={!productsCount}
            mr={4}
            _hover={{ cursor: "pointer" }}
            _active={undefined}
          >
            {productsCount}
          </Button>
        )}
        {smallOrMedium && (
          <Flex align="center" mr={5}>
            <IconButton onClick={() => onOpenDrawer(DRAWER_NAMES.AUTH_DRAWER)} icon={<FiMenu />} variant="outline" />
          </Flex>
        )}
        {!smallOrMedium && <UserMenu />}
      </Flex>
    </Flex>
  );
};

export const AppBar = ({ children, ...props }) => {
  const { onOpenDrawer } = useDrawer();
  const { small, medium } = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  const smallOrMedium = small || medium;

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="#2e1b46"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Image rounded="full" maxW="150px" h="auto" src={Logo} alt="Logo" mr={2} />
      </Flex>
      {smallOrMedium && (
        <Flex align="center" mr={5}>
          <IconButton onClick={() => onOpenDrawer(DRAWER_NAMES.UN_AUTH_DRAWER)} icon={<FiMenu />} variant="outline" />
        </Flex>
      )}
    </Flex>
  );
};
