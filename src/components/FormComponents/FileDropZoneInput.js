import React from 'react';
import { Box, FormLabel, List } from '@chakra-ui/react';

export const FileDropZoneInput = ({ formLabel, ...rest }) => {
  return (
    <Box as="section" mb={6}>
      <Box mb={4}>
        <FormLabel>{formLabel}</FormLabel>
      </Box>
      <List spacing={2}></List>
    </Box>
  );
};
