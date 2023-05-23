import React from "react";
import { Flex, Text, Box, Heading, SimpleGrid, Center } from "@chakra-ui/react";

import { Container } from "../../components";
import { TeamMemberCard } from "./components";
import { CustomerNavBar } from "../LandingPage/LandingPage";
import "./about.css";
import abouBG from "../../assets/img/hand-drawn-women-s-clothing-set_160308-251.png";
import aboutLogo from "../../assets/img/5.1.png";

const teamMembers = [
  {
    name: "Asif Hossain",
    image:
      "https://ermg-www-images.s3-ap-southeast-1.amazonaws.com/team/CEO.jpg",
    title: "Co-Founder | CEO",
    city: "New York",
    linkedin: "https://www.linkedin.com/in/theasifhossain/",
  },
  {
    name: "Yusuf Ahmed",
    image:
      "https://ermg-www-images.s3-ap-southeast-1.amazonaws.com/team/Yusuf.jpg",
    title: "Co-Founder | COO",
    city: "Dhaka",
    linkedin: "https://www.linkedin.com/in/ytahmed/",
  },
  {
    name: "Martin Strommer",
    image:
      "https://ermg-www-images.s3-ap-southeast-1.amazonaws.com/team/Martin.jpg",
    title: " Co-Founder | Chief Strategy Officer",
    city: "New york",
    linkedin: "https://www.linkedin.com/in/martin-strommer-0119a7/",
  },
  {
    name: "Abhishek Bose",
    image:
      "https://ermg-www-images.s3.ap-southeast-1.amazonaws.com/team/avishek.jpeg",
    title: "CTO",
    profession: "CTO",
    education: "EX-BGMEA, MD Alliance Stitches, FCI Group",
    city: "New york",
    linkedin: "https://www.linkedin.com/in/abhishekermg/",
  },
  {
    name: "Aminul Islam Hauladar",
    image:
      "https://ermg-www-images.s3.ap-southeast-1.amazonaws.com/team/Ashik.jpg",
    title: " Junior Executive | Management Lead",
    profession: " Junior Executive | Management Lead",
    education: "EX-BGMEA, MD Alliance Stitches, FCI Group",
    city: "New york",
    linkedin: "https://www.linkedin.com/in/aminulislamhauladar/",
  },
  {
    name: "Moinuddin Robin",
    image:
      "https://ermg-www-images.s3.ap-southeast-1.amazonaws.com/team/Robin.jpg",
    title: "Junior Executive | Business Development",
    profession: "Junior Executive | Business Development",
    education: "EX-BGMEA, MD Alliance Stitches, FCI Group",
    city: "New york",
    linkedin: "https://www.linkedin.com/in/moinuddin-robin/",
  },
  {
    name: "Sanjida Sumaya",
    image:
      "https://ermg-www-images.s3.ap-southeast-1.amazonaws.com/team/Sanjida+(1).jpg",
    title: "Junior Executive | Business Development Intern",
    profession: "Junior Executive | Business Development Intern",
    education: "EX-BGMEA, MD Alliance Stitches, FCI Group",
    city: "New york",
    linkedin: "https://www.linkedin.com/in/sanjida-sumaya-oyshi-75688b162/",
  },
  {
    name: "Dylan Proctor",
    image:
      "https://ermg-www-images.s3.ap-southeast-1.amazonaws.com/team/Dylan.jpg",
    title: "Data Engineer And Machine Learning",
    profession: "Data Engineer And Machine Learning",
    education: "EX-BGMEA, MD Alliance Stitches, FCI Group",
    city: "New york",
    linkedin: "https://www.linkedin.com/in/dylanproctor/",
  },
  {
    name: "Inzamamul Haque",
    image:
      "https://ermg-www-images.s3.ap-southeast-1.amazonaws.com/team/Inzamam.jpg",
    title: "Software Engineer",
    profession: "Junior Executive | Business Development Intern",
    education: "EX-BGMEA, MD Alliance Stitches, FCI Group",
    city: "New york",
    linkedin: "https://www.linkedin.com/in/md-inzamamul-haque-ab678813b/",
  },
];

export const AboutUs = () => {
  return (
    <Box bg="#09001b">
      <Box>
        <Box
          style={{
            backgroundImage: `url(${abouBG})`,
          }}
        >
          <CustomerNavBar />
          <Center px={5}>
            <Box
              maxW="70rem"
              className="about-text"
              color="white"
              my={20}
              px={10}
              pt={10}
              pb={20}
              // align="center"
            >
              <img src={aboutLogo} className="about-logo" alt="" />

              <Text fontSize="xl" className="nunito" align="left">
                Our founders have been affected by the closure of factories in
                the past few years while the Covid-19 pandemic is only making it
                worse. They believe that there can be an improved ecosystem for
                the fashion world to adjust to, to work with Bangladesh clothing
                manufacturers. This improved ecosystem will assist ready made
                garments (RMG) manufacturers from Bangladesh to meet global
                consumer demand. With the use of eRMG's innovative process and
                the use of big data analytics, it is our belief that the fastest
                growing economy's top most exported commodity can have a bigger
                share of the fashion industry.
              </Text>
            </Box>
          </Center>
        </Box>
        {/* <Box align="center" p={20} color="white" bg="#130628">
          <Heading fontSize="5xl" mb="20px" className="nunito">
            Where We Work
          </Heading>
          <Text fontSize="lg" className="nunito" maxW="50rem" mb="60px">
            We’ve worked in over 10 countries since 2018. And we’re partnering
            with new ones every year. Our programs build lasting relationships
            and strong capabilities wherever we work. Explore our branches
            country below.
          </Text>
          <Map teamMembers={teamMembers} setTooltipContent={setContent} />
          <MapChart />
          <ReactTooltip>{content}</ReactTooltip>
        </Box> */}
        <Container p={[2, 20]} maxW="100%">
          <Flex justify="center" align="center" direction="column">
            {/* {!smallOrMedium && <MapChart />} */}
            <Box w="100%">
              <Heading
                align="center"
                mb="20px"
                className="nunito"
                color="white"
                fontSize="5xl"
              >
                Meet Our Team
              </Heading>
              <Text
                align="center"
                mb="20px"
                className="nunito"
                fontSize="lg"
                color="white"
              >
                We have a dedicated team from worldwide
              </Text>
              <SimpleGrid pt={10} w="100%" spacing={6} columns={[1, 1, 3, 4]}>
                {teamMembers.map((teamMember, i) => (
                  <TeamMemberCard key={i} teamMember={teamMember} />
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
