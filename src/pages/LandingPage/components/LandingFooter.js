import React from "react";
import { Box, Flex, Link, Text, Stack, Heading } from "@chakra-ui/react";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoLinkedin,
} from "react-icons/io";

import Logo from "../../../assets/img/logo-light.png";

import MailchimpFormContainer from "./MailchimpFormContainer";

export const LandingFooter = () => {
  return (
    <Box as="footer" className="nunito" bg="#130628">
      <Heading
        pt={10}
        as="h3"
        size="xl"
        color="white"
        textAlign="center"
        className="nunito"
      >
        Fashion is evolving, lets evolve together
      </Heading>

      <MailchimpFormContainer />

      <Box pb={10} px={18} margin="0 auto">
        <Flex>
          <Stack direction={["column", "column", "row"]} spacing={0} w="100%">
            <Box p={3} w="100%">
              <img style={{ height: 70 }} src={Logo} alt="" />
              <Stack py={3} ml={3} isInline spacing={3}>
                <Link isExternal href="https://www.instagram.com/ermg.co/">
                  <Box as={IoLogoInstagram} size="40px" color="white" />
                </Link>
                <Link isExternal href="https://twitter.com/ermgbd">
                  <Box as={IoLogoTwitter} size="40px" color="white" />
                </Link>
                <Link isExternal href="https://www.linkedin.com/company/ermg/">
                  <Box as={IoLogoLinkedin} size="40px" color="white" />
                </Link>
                <Link isExternal href="https://www.facebook.com/ermgbd/">
                  <Box as={IoLogoFacebook} size="40px" color="white" />
                </Link>
              </Stack>
            </Box>
            <Box p={3} w="100%">
              <Text as="samp" color="#868484" fontSize="lg">
                Contact
              </Text>
              <Text mt={4} color="white" fontSize="md">
                Contact Us
              </Text>

              <Text mt={2} color="white" fontSize="md">
                Locate A Dealer
              </Text>
              <Text mt={2} color="white" fontSize="md">
                Product Sample
              </Text>
              <Text mt={2} color="white" fontSize="md">
                Fabric Quality
              </Text>
            </Box>
            <Box p={3} w="100%">
              <Text as="samp" color="#868484" fontSize="lg">
                eRMG
              </Text>
              <Text mt={4} color="white" fontSize="md">
                About eRMG
              </Text>
              <Text mt={2} color="white" fontSize="md">
                eRMG Services
              </Text>
              <Text mt={2} color="white" fontSize="md">
                Careers
              </Text>
              <Text mt={2} color="white" fontSize="md">
                Newsroom
              </Text>
            </Box>
            <Box color="white" p={3} w="100%">
              {/* <FooterContact /> */}
              <Text as="samp" color="#868484" fontSize="lg">
                Support
              </Text>

              <Text mt={2} color="white" fontSize="md">
                FAQ
              </Text>
              <Text mt={2} color="white" fontSize="md">
                <a href="mailto:support@ermg.co?subject = support&body = Message">
                  support@ermg.co
                </a>
              </Text>
            </Box>
          </Stack>
        </Flex>
        {/* <Flex direction="column" align="center">
          <Stack isInline spacing={6}>
            <Link isExternal href="https://www.instagram.com/ermg.co/">
              <Box p={4} bg="#2E1C46" rounded="full">
                <Box as={IoLogoInstagram} size="30px" color="white" />
              </Box>
            </Link>
            <Link isExternal href="https://twitter.com/ermgbd">
              <Box p={4} bg="#2E1C46" rounded="full">
                <Box as={IoLogoTwitter} size="30px" color="white" />
              </Box>
            </Link>
            <Link isExternal href="https://www.linkedin.com/company/ermg/">
              <Box p={4} bg="#2E1C46" rounded="full">
                <Box as={IoLogoLinkedin} size="30px" color="white" />
              </Box>
            </Link>
            <Link isExternal href="https://www.facebook.com/ermgbd/">
              <Box p={4} bg="#2E1C46" rounded="full">
                <Box as={IoLogoFacebook} size="30px" color="white" />
              </Box>
            </Link>
          </Stack>
          <Box mt={8}>
            <Button variant="ghost" onClick={onToggle}>
              Contact
            </Button>
          </Box>
          <Collapse in={isOpen}>
            <Stack spacing={3} direction="column" mt={2}>
              <Flex align="center">
                <Box as={IoIosMail} size="20px" mr={2} />
                <Link href="mailto:support@ermg.co">support@ermg.co</Link>
              </Flex>
              <Flex align="center">
                <Box as={IoIosPhonePortrait} size="20px" mr={2} />
                <Link href="tel:+8801316993158" mr={2}>
                  +8801316993158
                </Link>
              </Flex>
              <Flex align="center">
                <Box as={IoLogoWhatsapp} size="20px" mr={2} />
                <Link href="tel:+1 212-315-8232">+1 212-315-8232</Link>
              </Flex>
            </Stack>
          </Collapse>
        </Flex> */}
      </Box>
      <Box align="center" margin="0 auto" p={5}>
        <Text color="white" fontSize="sm">
          © {new Date().getFullYear()} eRMG All Copyright Reserved.
        </Text>
      </Box>
    </Box>
  );
};
