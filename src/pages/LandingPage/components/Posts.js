import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const Posts = ({ blogPosts, GAEventTracker }) => {
  return (
    <Box bg="#1c132e" py={20} px={20}>
      <Flex
        direction="column"
        className="nunito"
        pb={10}
        margin="0 auto"
        width="100%"
      >
        <Flex
          direction="column"
          align="center"
          justify="flex-start"
          mb={["1rem", 0]}
        >
          <Heading
            as="h1"
            size="lg"
            textAlign="center"
            lineHeight="shorter"
            pb={20}
            color="white"
            className="nunito"
          >
            Explore more about working with eRMG
          </Heading>
        </Flex>
        <Flex>
          <Stack direction={["column", "column", "row"]} spacing={4} w="100%">
            {blogPosts.map((blogPost, i) => (
              <Box key={i} bg="#fafbff" boxShadow="md" w="100%">
                <Image
                  src={blogPost.image}
                  w="100%"
                  maxH="200px"
                  objectFit="cover"
                />
                <Text color="white" px={4} py={2} bg="blue.500">
                  {" "}
                  <FontAwesomeIcon color="white" icon={faFolderOpen} />{" "}
                  {blogPost.category}
                </Text>
                <Box p={4} mt={3} mb={3}>
                  <Text fontSize="lg" fontWeight="semibold" lineHeight="short">
                    {blogPost.title}
                  </Text>
                  <Button
                    className="post-btn"
                    borderRadius="2px"
                    mt={3}
                    py={6}
                    bg="transparent"
                    color="white"
                    variant="outline"
                  >
                    <Link
                      isExternal
                      href={blogPost.link}
                      color="blue.500"
                      onClick={(e) =>
                        GAEventTracker(
                          `"${blogPost.category}" post visited`,
                          blogPost.link
                        )
                      }
                    >
                      LEARN MORE
                    </Link>
                  </Button>
                </Box>
              </Box>
            ))}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Posts;
