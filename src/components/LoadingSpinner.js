import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

export const LoadingSpinner = () => (
  <Flex w="100%" h="100%" justify="center" align="center">
    <Spinner size="xl" color="green.500" />
  </Flex>
);
