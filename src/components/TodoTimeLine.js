import React from 'react';
import { Box, Text, SimpleGrid } from '@chakra-ui/react';

export const TodoTimeLine = ({ events }) => {
  return (
    <Box>
      <SimpleGrid templateColumns="1fr 1fr 100px 100px" rowGap={8} mb={4}>
        <Text fontWeight="bold">Task</Text>
        <Text fontWeight="bold">State</Text>
        <Text fontWeight="bold">Start date</Text>
        <Text fontWeight="bold">End date</Text>
      </SimpleGrid>
      <SimpleGrid templateColumns="1fr 1fr 100px 100px" rowGap={4}></SimpleGrid>
    </Box>
  );
};
