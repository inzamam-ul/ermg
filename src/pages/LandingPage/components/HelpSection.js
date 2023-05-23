import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faPrayingHands,
} from "@fortawesome/free-solid-svg-icons";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import React from "react";
import { IoMdCheckmarkCircle, IoMdSettings } from "react-icons/io";
AOS.init();

const HelpSection = () => {
  return (
    <>
      <Box bg="#130628" color="white" py={10} px={20}>
        <Grid
          templateColumns={["1fr", "1fr", "55% 40%"]}
          gap="5%"
          margin="0 auto"
          maxW="80rem"
          justifyContent="self-end"
          pt={10}
        >
          <Flex
            data-aos="fade-up"
            data-aos-duration="400"
            direction="column"
            justify="center"
            align="end"
            mb={["1rem", 0]}
          >
            <Heading
              className="nunito"
              as="h1"
              size="2xl"
              lineHeight="shorter"
              mb={4}
            >
              See how eRMG can help you
            </Heading>

            <Accordion w="100%" py={5} pr={10} allowToggle>
              <AccordionItem fontSize="18px">
                {({ isExpanded }) => (
                  <>
                    <h2 style={{ fontSize: 20 }}>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <FontAwesomeIcon
                            color="white"
                            icon={faPrayingHands}
                            style={{ marginRight: 10 }}
                          />
                          Requirements Formalization -
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Organize your ideas quicker and stop wasting time on the
                      small stuff
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem fontSize="18px">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <FontAwesomeIcon
                            color="white"
                            icon={faPrayingHands}
                            style={{ marginRight: 10 }}
                          />
                          Sampling -
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Our Platform reduces the back and forth so you can get to
                      production quicker
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem fontSize="18px">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <FontAwesomeIcon
                            color="white"
                            icon={faPrayingHands}
                            style={{ marginRight: 10 }}
                          />
                          Materials Sourcing -
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Don’t overpay for the necessary parts you need to make
                      your dream a reality
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem fontSize="18px">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <FontAwesomeIcon
                            color="white"
                            icon={faPrayingHands}
                            style={{ marginRight: 10 }}
                          />
                          Production Monitoring -
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Always be up to date with your order, with our reporting
                      system
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem fontSize="18px">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <FontAwesomeIcon
                            color="white"
                            icon={faPrayingHands}
                            style={{ marginRight: 10 }}
                          />
                          Quality Assurance -
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Reduce defects and get what you pay for through the
                      quality assurance we offer through our platform
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem fontSize="18px">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <FontAwesomeIcon
                            color="white"
                            icon={faPrayingHands}
                            style={{ marginRight: 10 }}
                          />
                          Logistics -
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Stop worrying about shipping and customs, we take care of
                      it as you sit back, relax, and await your products
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Flex>
          <Flex
            data-aos="fade-up"
            data-aos-duration="800"
            justify={["center", "center", "flex-end"]}
          >
            <Image
              w="100%"
              h="auto"
              p={14}
              objectFit="contain"
              rounded="lg"
              src="https://i.ibb.co/TrDqtGq/fhewifjnahgbermg.png"
            />
          </Flex>
        </Grid>
        <Grid
          templateColumns={["1fr", "1fr", "40% 55%"]}
          gap="5%"
          margin="0 auto"
          maxW="80rem"
          justifyContent="self-end"
          pt={10}
        >
          <Flex
            data-aos="fade-up"
            data-aos-duration="800"
            justify={["center", "center", "flex-end"]}
          >
            <Image
              w="100%"
              h="auto"
              p={14}
              objectFit="contain"
              rounded="lg"
              src="https://i.ibb.co/TrDqtGq/fhewifjnahgbermg.png"
            />
          </Flex>
          <Flex
            data-aos="fade-up"
            data-aos-duration="400"
            direction="column"
            justify="center"
            align="end"
            mb={["1rem", 0]}
          >
            <Accordion w="100%" py={5} pr={10} allowToggle>
              <AccordionItem fontSize="18px">
                {({ isExpanded }) => (
                  <>
                    <h2 style={{ fontSize: 20 }}>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <FontAwesomeIcon
                            color="white"
                            icon={faPrayingHands}
                            style={{ marginRight: 10 }}
                          />
                          Requirements Formalization -
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Organize your ideas quicker and stop wasting time on the
                      small stuff
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem fontSize="18px">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <FontAwesomeIcon
                            color="white"
                            icon={faPrayingHands}
                            style={{ marginRight: 10 }}
                          />
                          Sampling -
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Our Platform reduces the back and forth so you can get to
                      production quicker
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem fontSize="18px">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <FontAwesomeIcon
                            color="white"
                            icon={faPrayingHands}
                            style={{ marginRight: 10 }}
                          />
                          Materials Sourcing -
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Don’t overpay for the necessary parts you need to make
                      your dream a reality
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem fontSize="18px">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <FontAwesomeIcon
                            color="white"
                            icon={faPrayingHands}
                            style={{ marginRight: 10 }}
                          />
                          Production Monitoring -
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Always be up to date with your order, with our reporting
                      system
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem fontSize="18px">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <FontAwesomeIcon
                            color="white"
                            icon={faPrayingHands}
                            style={{ marginRight: 10 }}
                          />
                          Quality Assurance -
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Reduce defects and get what you pay for through the
                      quality assurance we offer through our platform
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem fontSize="18px">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <FontAwesomeIcon
                            color="white"
                            icon={faPrayingHands}
                            style={{ marginRight: 10 }}
                          />
                          Logistics -
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Stop worrying about shipping and customs, we take care of
                      it as you sit back, relax, and await your products
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Flex>
        </Grid>
      </Box>
    </>
  );
};

export default HelpSection;
