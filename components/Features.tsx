"use client";
import { Box, Container, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Features() {
  return (
    <Box bg={"gray.800"} position={"relative"}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        insetY={0}
        right={0}
      >
        <Flex bgGradient={"linear(to-r, gray.800 10%, transparent)"} w={"full"} h={"full"} />
      </Flex>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack flex={1} color={"gray.400"} justify={{ lg: "center" }} py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"gray.500"}
              >
                Tidbits
              </Text>
              <Heading color={"white"} mb={5} fontSize={{ base: "3xl", md: "5xl" }}>
                DINKs
              </Heading>
              <Text fontSize={"xl"} color={"gray.400"}>
                Our entrepreneurial journey is deeply intertwined with our personal lives. Embracing our DINK status, we
                prioritize health and happiness, which empowers us to chase adventures without limits. This freedom not
                only sparks our creativity but also propels our ambitions, allowing us to venture into new markets and
                explore the world freely.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text fontFamily={"heading"} fontSize={"3xl"} color={"white"} mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={"xl"} color={"gray.400"}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "10+",
    content: (
      <>
        <StatsText>Lorem Ipsum</StatsText> Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </>
    ),
  },
  {
    title: "24/7",
    content: (
      <>
        <StatsText>Lorem Ipsum</StatsText> Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </>
    ),
  },
  {
    title: "13%",
    content: (
      <>
        <StatsText>Lorem Ipsum</StatsText> Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </>
    ),
  },
  {
    title: "250M+",
    content: (
      <>
        <StatsText>Lorem Ipsum</StatsText> Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </>
    ),
  },
];
