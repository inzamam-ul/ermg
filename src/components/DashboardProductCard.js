import React from "react";
import { Button, Box, Text, Image, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

export const DashboardProductCard = ({ product, footerItems }) => (
  <Box borderWidth={1} borderRadius={8} p={2} borderColor="gray.200" position="relative">
    {product.favorite && <Box as={AiFillHeart} size="32px" position="absolute" top={2} right={2} color="red.500" />}
    <Image
      rounded="md"
      height="300px"
      objectFit="cover"
      width="100%"
      src={product.image}
      fallbackSrc="https://via.placeholder.com/150"
    />
    <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
      {product.name}
    </Text>
    <Text mt={2}>{product.description}</Text>
    <Menu>
      <MenuButton as={Button} rightIcon={<FiChevronDown />} variant="link" colorScheme="purple">
        Actions
      </MenuButton>
      <MenuList>
        {footerItems.map((footerItem, i) => (
          <MenuItem key={i} onClick={footerItem.handler}>
            {footerItem.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  </Box>
);
