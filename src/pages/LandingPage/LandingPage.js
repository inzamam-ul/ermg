import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import {
  Flex,
  Heading,
  Box,
  Button,
  Stack,
  useDisclosure,
  Slide,
  ButtonGroup,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { useIntersection } from 'react-use';
import { Link as RouterLink } from 'react-router-dom';
import { useMedia } from 'react-media';
import { FiMenu } from 'react-icons/fi';

import { GLOBAL_MEDIA_QUERIES, DRAWER_NAMES } from '../../constants';
import { LinkButton } from '../../components';
import { useDrawer } from '../../providers';
import topBg from './bgImages/topBGNew.png';
import Logo from '../../assets/img/logo-light.png';
import WhatIs from './components/WhatIs';

import Services from './components/Services';
import Posts from './components/Posts';
import MailchimpFormContainer from './components/MailchimpFormContainer';
import UseGAEventTracker from '../../lib/UseGAEventTracker';
// ReactGA.initialize("UA-204285737-1");
// ReactGA.pageview(window.location.pathname + window.location.search);
// console.log(window.location.pathname);

const blogPosts = [
  {
    title: 'Key Challenges while Sourcing Apparel and Clothing',
    category: 'Product Development',
    link: 'https://blog.ermg.co/key-challenges-while-sourcing-apparel-and-clothing',
    image: 'https://blog.ermg.co/wp-content/uploads/2021/01/Untitled.png',
  },
  {
    title: 'Future Opportunities and Challenges of Bangladeshi Denim Industry',
    category: 'Case Study',
    link: 'https://blog.ermg.co/future-opportunities-and-challenges-of-bangladeshi-denim-industry',
    image: 'https://blog.ermg.co/wp-content/uploads/2020/08/7465-min.jpg',
  },
  {
    title: 'Top 5 Challenges in the fashion and apparel industry',
    category: 'Fashion and Apparel',
    link: 'https://blog.ermg.co/top-5-challenges-in-the-fashion-and-apparel-industry',
    image: 'https://blog.ermg.co/wp-content/uploads/2020/08/14721-min.jpg',
  },
];

export const ThingStacks = stackProps => {
  const GAEventTracker = UseGAEventTracker('External Links');
  return (
    <Stack spacing={8} {...stackProps}>
      <Link as={RouterLink} to="/" fontWeight="bold">
        Home
      </Link>
      <Link as={RouterLink} to="/about-us" fontWeight="bold">
        About us
      </Link>
      <Link
        isExternal
        href="https://blog.ermg.co"
        fontWeight="bold"
        onClick={e =>
          GAEventTracker('eRMG blog page visited', 'https://blog.ermg.co')
        }
      >
        Blog
      </Link>
      {/* <Link as={RouterLink} to="/pricing" fontWeight="bold">
      Pricing
    </Link> */}
    </Stack>
  );
};

const LandingPageAppBarContent = () => (
  <Flex className="nunito" justify="space-between">
    <Flex>
      <Heading mr={8}>
        {' '}
        <Link as={RouterLink} to="/" fontWeight="bold">
          <img style={{ height: 50 }} src={Logo} alt="" />
        </Link>
      </Heading>
      <ThingStacks isInline={true} align="center" />
    </Flex>
    <Stack isInline spacing={6} align="center">
      <Link as={RouterLink} to="/login" fontWeight="bold">
        <Button
          className="signup-btn"
          borderRadius="2px"
          py={5}
          bg="transparent"
          color="white"
          variant="outline"
        >
          Sign in
        </Button>
      </Link>

      <ButtonGroup spacing={6}>
        <LinkButton
          className="contact-btn"
          borderRadius="2px"
          py={5}
          bg="#543fa4"
          color="white"
          variant="outline"
          to="/contact"
          borderColor="#543fa4"
        >
          Contact
        </LinkButton>
      </ButtonGroup>
    </Stack>
  </Flex>
);

const LandingPageAppBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '100px',
    threshold: 1,
  });

  useEffect(() => {
    if (!!intersection) {
      if (!intersection.isIntersecting) {
        onOpen();
      } else {
        onClose();
      }
    }
  }, [intersection, onClose, onOpen]);

  return (
    <Box>
      <Box
        as="nav"
        color="white"
        w="100%"
        bg="transparent"
        maxW="95%"
        margin="0 auto"
        py={4}
        px={4}
        ref={intersectionRef}
      >
        <LandingPageAppBarContent />
      </Box>
      <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          className="appbar"
          as="nav"
          p="20px"
          color="white"
          width="95%"
          m="0.5rem auto 0 auto"
          rounded="full"
          shadow="md"
          style={{
            background: '#2d0e3696',
          }}
        >
          <LandingPageAppBarContent />
        </Box>
      </Slide>
    </Box>
  );
};

export const CustomerNavBar = () => {
  const [navColour, updateNavbar] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 150) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  const { onOpenDrawer } = useDrawer();

  const { small, medium } = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  const smallOrMedium = small || medium;

  if (smallOrMedium) {
    return (
      <Box
        pos={navColour ? 'fixed' : ''}
        top="0"
        bg={
          navColour
            ? 'linear-gradient(rgb(28 19 46), transparent)'
            : 'linear-gradient(rgb(28 19 46), transparent)'
        }
        zIndex="sticky"
        left="0"
        right="0"
        style={{
          backdropFilter: navColour && 'blur(10px)',
          color: 'white',
        }}
      >
        <Box
          as="nav"
          w="100%"
          bg="transparent"
          maxW="80rem"
          margin="0 auto"
          py={3}
          px={4}
        >
          <Flex justify="space-between">
            <Heading>
              <Link as={RouterLink} to="/" fontWeight="bold">
                <img style={{ height: 50 }} src={Logo} alt="" />
              </Link>
            </Heading>

            <IconButton
              color="white"
              fontSize="25px"
              onClick={() => onOpenDrawer(DRAWER_NAMES.CUSTOMER_DRAWER)}
              icon={<FiMenu />}
              variant="ghost"
            />
          </Flex>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        style={{
          backgroundImage: 'linear-gradient(rgb(28 19 46), transparent)',
        }}
        px={4}
      >
        <LandingPageAppBar />
      </Box>
    );
  }
};

export const LandingPage = () => {
  const GAEventTracker = UseGAEventTracker('Blog Links');

  return (
    <>
      <Box className="nunito landingPage">
        <Box>
          <Box
            className="topHeader"
            style={{
              backgroundImage: `url(${topBg})`,
              backgroundSize: 'cover',
            }}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            mb={[0, 0, 0]}
          >
            <CustomerNavBar />
            <Box h="auto" pb={20} color="white" align="center">
              <Heading
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}
                as="h1"
                mt={10}
                size="3xl"
                px={[3, 0]}
                lineHeight="shorter"
              >
                The way forward <span style={{ color: '#fff18f' }}>for</span>{' '}
                <br />
                fashion sourcing
              </Heading>

              {/* <SingInSignUpButtons /> */}
              <MailchimpFormContainer />

              <WhatIs />
            </Box>
          </Box>
          {/* <HelpSection /> */}

          <Services />
          <Posts GAEventTracker={GAEventTracker} blogPosts={blogPosts} />
        </Box>
      </Box>
    </>
  );
};
