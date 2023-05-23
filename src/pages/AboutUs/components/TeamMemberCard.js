import React from "react";
import {
  Flex,
  Text,
  Box,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Stack,
  Link,
} from "@chakra-ui/react";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

export const TeamMemberCard = ({ teamMember }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        direction="column"
        boxShadow="lg"
        borderRadius="2px"
        className="team-card"
        bg="#fcfcfc"
        h="100%"
        pt={5}
        px={5}
        onClick={onOpen}
        overflow="hidden"
        position="relative"
        cursor="pointer"
      >
        <Box as="header">
          <Flex>
            <Text
              maxW="45%"
              align="left"
              mt={2}
              fontSize="xl"
              fontWeight="semibold"
              lineHeight="short"
            >
              {teamMember.name}
            </Text>
            <div className="img-container">
              <Image className="team-img" src={teamMember.image} />
            </div>
          </Flex>
        </Box>
        <Box as="section" py={10}>
          <Text
            color="pink.800"
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
          >
            {teamMember.title}
          </Text>
        </Box>
        <Stack py={4} isInline spacing={3}>
          {/* <Link isExternal href="https://www.instagram.com/ermg.co/">
            <Box as={IoLogoInstagram} size="35px" color="gray" />
          </Link> */}
          <Link isExternal href="https://twitter.com/ermgbd">
            <Box as={IoLogoTwitter} size="35px" color="gray" />
          </Link>
          <Link isExternal href={teamMember.linkedin}>
            <Box as={IoLogoLinkedin} size="35px" color="gray" />
          </Link>
          {/* <Link isExternal href="https://www.facebook.com/ermgbd/">
            <Box as={IoLogoFacebook} size="35px" color="gray" />
          </Link> */}
        </Stack>
      </Flex>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Flex
              direction="column"
              rounded="xs"
              boxShadow="lg"
              bg="white"
              h="100%"
              p={5}
              onClick={onOpen}
              overflow="hidden"
              position="relative"
            >
              <Box as="header">
                <Flex>
                  <Text
                    maxW="40%"
                    align="left"
                    mt={2}
                    fontSize="xl"
                    fontWeight="semibold"
                    lineHeight="short"
                  >
                    {teamMember.name}
                  </Text>
                  <div className="img-container">
                    <Image className="team-img" src={teamMember.image} />
                  </div>
                </Flex>
              </Box>
              <Box as="section" py={20}>
                <Text
                  color="pink.800"
                  textTransform="uppercase"
                  fontSize="sm"
                  fontWeight="bold"
                >
                  {teamMember.title}
                </Text>
                {/* {teamMember.profession && (
                  <Text mt={4} fontSize="sm">
                    {teamMember.profession}
                  </Text>
                )}
                {teamMember.education && (
                  <Text mt={2} fontSize="sm">
                    {teamMember.education}
                  </Text>
                )} */}
              </Box>
              <Stack position="absolute" bottom="0" py={8} isInline spacing={3}>
                {/* <Link isExternal href="https://www.instagram.com/ermg.co/">
                  <Box as={IoLogoInstagram} size="35px" color="gray" />
                </Link> */}
                <Link isExternal href="https://twitter.com/ermgbd">
                  <Box as={IoLogoTwitter} size="35px" color="gray" />
                </Link>
                <Link isExternal href={teamMember.linkedin}>
                  <Box as={IoLogoLinkedin} size="35px" color="gray" />
                </Link>
                {/* <Link isExternal href="https://www.facebook.com/ermgbd/">
                  <Box as={IoLogoFacebook} size="35px" color="gray" />
                </Link> */}
              </Stack>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
