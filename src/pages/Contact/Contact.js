import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "./contact.css";

import Iframe from "react-iframe";
import { CustomerNavBar } from "../LandingPage/LandingPage";
import "./contact.css";

export const Contact = () => {
  return (
    <Box bg="#27183c" width="100%">
      <CustomerNavBar />
      <Flex
        justify="center"
        align="center"
        direction="column"
        bg="#27183c"
        pb={20}
      >
        <Iframe
          url="https://us10.list-manage.com/contact-form?u=371127f5e4304f5197fb35ee6&form_id=3601eda132d8eb40c9b2467a736aa455"
          scrolling="no"
          height="880px"
          width="100%"
          id="myId"
          display="initial"
          position="relative"
          style={{ background: "red" }}
        />
      </Flex>
    </Box>
  );
};
