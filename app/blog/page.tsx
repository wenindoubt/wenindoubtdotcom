"use client";
import {
  Box,
  Container,
  Divider,
  HStack,
  Heading,
  Image,
  Link,
  SpaceProps,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

type BlogAuthorProps = {
  date: Date;
  name: string;
  src: string;
};

const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image borderRadius="full" boxSize="40px" src={props.src} alt={`Avatar of ${props.name}`} />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
          <Box width={{ base: "100%", sm: "80%" }} zIndex="2" marginLeft={{ base: "0", sm: "5%" }} marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }} href="/blog/may-27-2024">
              <Image
                borderRadius="lg"
                src={"/us.jpeg"}
                alt="some good alt text"
                objectFit="contain"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </Link>
          </Box>
          <Box zIndex="1" width="90%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)",
              )}
              backgroundSize="20px 20px"
              opacity="0.5"
              height="100%"
            />
          </Box>
        </Box>
        <Box display="flex" flex="1" flexDirection="column" justifyContent="center" marginTop={{ base: "3", sm: "0" }}>
          <BlogTags tags={["Lifestyle", "History"]} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }} href="/blog/may-27-2024">
              10 Years of Marriage
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
            noOfLines={[1, 2, 3]}
          >
            Welcome to our corner of the internet! We&apos;re{" "}
            <Text as={"b"} color={"green.400"}>
              {" "}
              Jeffrey{" "}
            </Text>{" "}
            and{" "}
            <Text as={"b"} color={"green.400"}>
              Linjing
            </Text>
            , a dynamic duo who met at Rensselaer Polytechnic Institute in the charming town of Troy, New York. Our
            story began in the fall of 2011, when mutual friends introduced us. By December of that year, we were
            officially a couple, and just a few years later, on February 18, 2014, we eloped to the historic City Hall
            in Boston, Massachusetts, to tie the knot.
          </Text>
          <BlogAuthor name="Jeffrey Wen" src="/jeffrey.jpeg" date={new Date("2024-05-24")} />
          <BlogAuthor name="Linjing Wen" src="/linjing.png" date={new Date("2024-05-24")} />
        </Box>
      </Box>
      <Divider marginTop="5" />
    </Container>
  );
};

export default ArticleList;
