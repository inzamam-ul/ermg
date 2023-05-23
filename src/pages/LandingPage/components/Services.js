import { Box, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Container } from "../../../components";

const Services = () => {
  return (
    <Container maxW="100%" bg="#22193e" px={[5, 20]}>
      <Flex justify="center" align="center" direction="column">
        {/* {!smallOrMedium && <MapChart />} */}
        <Box w="100%">
          <SimpleGrid w="100%" spacing={0} columns={[1, 1, 3, 4]}>
            <Box className="service_1" color="white">
              <Box p={4} mt={3} mb={3}>
                <Text fontSize="4xl" lineHeight="short" className="tokyo">
                  Requirement Formalization
                </Text>
                {/* <img style={{ height: 100 }} src={rfimg} alt="" /> */}
                <Text
                  fontSize="lg"
                  py={8}
                  fontWeight="semibold"
                  lineHeight="short"
                >
                  We help buyers organise their requirements into a professional
                  format so that suppliers spend less time on extra processes
                </Text>
              </Box>
              <button className="service-btn">
                <Link isExternal href={""} fontWeight="bold" color="#ce319e">
                  Learn More
                </Link>
              </button>
            </Box>
            <Box className="service_2" color="white" bg="#2a1c46d1">
              <Box p={4} mt={3} mb={3}>
                <Text
                  fontSize="4xl"
                  // fontWeight="semibold"
                  lineHeight="short"
                  className="tokyo"
                >
                  Smart Product Development
                </Text>
                {/* <img style={{ height: 100 }} src={rfimg} alt="" /> */}
                <Text
                  fontSize="lg"
                  py={8}
                  fontWeight="semibold"
                  lineHeight="short"
                >
                  We have digital tools and smart features to assist buyers and
                  suppliers with product development, design, and sampling
                </Text>
              </Box>
              <button className="service-btn">
                <Link isExternal href={""} fontWeight="bold" color="#ce319e">
                  Learn More
                </Link>
              </button>
            </Box>
            <Box className="service_3" color="white">
              <Box p={4} mt={3} mb={3}>
                <Text
                  fontSize="4xl"
                  // fontWeight="semibold"
                  lineHeight="short"
                  className="tokyo"
                >
                  Product Monitoring and Quality Assurance
                </Text>
                {/* <img style={{ height: 100 }} src={rfimg} alt="" /> */}
                <Text
                  fontSize="lg"
                  py={8}
                  fontWeight="semibold"
                  lineHeight="short"
                >
                  Virtually monitor your supply chain, reduce defects, and get
                  what you pay for using our project management features
                </Text>
              </Box>

              <button className="service-btn">
                <Link isExternal href={""} fontWeight="bold" color="#ce319e">
                  Learn More
                </Link>
              </button>
            </Box>
            <Box className="service_4" bg="#2a1c46d1" color="white" w="100%">
              <Box p={4} mt={3} mb={3}>
                <Text
                  fontSize="4xl"
                  // fontWeight="semibold"
                  lineHeight="short"
                  className="tokyo"
                >
                  Sourcing and Logistcis
                </Text>
                {/* <img style={{ height: 100 }} src={rfimg} alt="" /> */}
                <Text
                  fontSize="lg"
                  py={8}
                  fontWeight="semibold"
                  lineHeight="short"
                >
                  Whether it be for a manufacturer or fabrics supplier or
                  freight forwarder, safely connect with all entities needed for
                  an order to be completed
                </Text>
              </Box>
              <button className="service-btn">
                <Link isExternal href={""} fontWeight="bold" color="#ce319e">
                  Learn More
                </Link>
              </button>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Container>
  );
};

export default Services;
