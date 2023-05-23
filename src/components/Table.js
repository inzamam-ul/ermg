import { Box } from "@chakra-ui/react";
import React from "react";

export function Table(props) {
  return (
    <Box shadow="sm" rounded="lg" overflow="hidden">
      <Box as="table" width="full" {...props} />
    </Box>
  );
}

export function TableHead(props) {
  return <Box as="thead" {...props} />;
}

export function TableRow(props) {
  return <Box as="tr" {...props} />;
}

export function TableHeader(props) {
  return (
    <Box
      as="th"
      px="6"
      py="3"
      borderBottomWidth="1px"
      backgroundColor="gray.50"
      textAlign="left"
      fontSize="xs"
      color="gray.500"
      textTransform="uppercase"
      letterSpacing="wider"
      lineHeight="1rem"
      fontWeight="medium"
      {...props}
    />
  );
}

export function TableBody(props) {
  return <Box as="tbody" {...props} />;
}

export function TableCell(props) {
  return <Box as="td" px="6" py="4" lineHeight="1.25rem" whiteSpace="nowrap" {...props} />;
}
