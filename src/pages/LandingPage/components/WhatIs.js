import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Container } from '../../../components';

const WhatIs = () => {
  return (
    <Container maxW={['100%', '90%', '85%', '75%']}>
      <Flex
        color="white"
        textAlign="left"
        width="100%"
        // maxW="70rem"
        bg="#27183cbf"
        px={4}
        pt={8}
        py={3}
        my={3}
        borderRadius="3px"
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <Flex
          direction={['column-reverse', 'column-reverse', 'row']}
          justify="space-between"
          // maxW="80rem"
          // width="100%"
          margin="0 auto"
        >
          <Box w="100%" data-aos="fade-up" data-aos-duration="800">
            <Image
              w="auto"
              // maxW={["600px", "600px", "400px", "25rem", "500px"]}
              h="inherit"
              objectFit="cover"
              rounded="lg"
              src="https://i.ibb.co/xjk23DG/web-sample1-transparency-01-1.png"
            />
          </Box>
          <Flex
            data-aos="fade-up"
            data-aos-duration="400"
            direction="column"
            justify="center"
            align="end"
            mb={['1rem', 0]}
            ml={[0, 0, 12]}
            pb={8}
            width="100%"
          >
            <Heading
              className="nunito"
              as="h1"
              size="2xl"
              lineHeight="shorter"
              mb={2}
              w="100%"
            >
              Who we are!
            </Heading>
            <Text fontSize="xl" mb={8}>
              eRMG connects fashion brands, wholesalers and other buyers with
              the clothing manufacturers of the world, starting with Bangladesh.
              Through a proprietary platform, we allow all entities in the
              fashion and apparel ecosystem to manage their supply chains,
              ensuring a bigger chunk of profit for all parties.
            </Text>
            <Text fontSize="sm" mb={8}>
              We exist to democratize the murky waters of apparel sourcing, and
              enable anyone no matter how small, to go from idea to shelf in the
              easiest possible way.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default WhatIs;
