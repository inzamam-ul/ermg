import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Container, LinkButton } from "../../components";

const timesLines = [
  {
    title: "Gantt",
    path: "/timelines/gantt",
  },
  {
    title: "Calendar",
    path: "/timelines/calendar",
  },
];

const TimeLineCard = ({ title, path }) => (
  <Box p={4} rounded="md" borderWidth={1} borderRadius={8} boxShadow="lg">
    <Box mb={6}>
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
    </Box>
    <Box>
      <LinkButton to={path}>Go to {title}</LinkButton>
    </Box>
  </Box>
);

export const TimeLines = () => {
  return (
    <Container pt={4}>
      <Heading size="lg" mb={4}>
        Timelines
      </Heading>

      <SimpleGrid columns={3} gap={8}>
        {timesLines.map((timeLine) => (
          <TimeLineCard {...timeLine} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
