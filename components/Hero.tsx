"use client";
import StatisticsWithIcons from "@/components/StatisticsWithIcons";
import { Box, Container, Divider, HStack, Heading, Image, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaHandsHelping, FaHeart, FaHistory, FaPlane, FaUserGraduate } from "react-icons/fa";

export default function Hero() {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const sectionColor = useColorModeValue("gray.800", "gray.300");
  const bgGradient = useColorModeValue("linear(to-r, teal.200, teal.500)", "linear(to-r, teal.600, teal.800)");

  return (
    <Box bg={bgGradient} py="12">
      <Container maxW={"7xl"}>
        <Box display="flex" justifyContent="center">
          <Image
            borderRadius="lg"
            src={"/about-us.jpeg"}
            alt="some good alt text"
            objectFit="contain"
            width={{ base: "90%", md: "60%" }} // Adjust the width for mobile and larger screens
            transition="0.3s ease-in-out"
            boxShadow="lg"
            border="2px solid"
            borderColor={useColorModeValue("gray.200", "gray.700")}
            _hover={{
              transform: "scale(1.05)",
            }}
          />
        </Box>
        <StatisticsWithIcons />
        <VStack paddingTop="40px" spacing="8" alignItems="flex-start">
          <Box bg={useColorModeValue("gray.100", "gray.700")} p="4" borderRadius="md" boxShadow="md" width="100%">
            <Heading as="h2" fontSize="3xl" textAlign="center" color={textColor}>
              From College Sweethearts to Lifelong Partners
            </Heading>
          </Box>

          <Divider borderColor={sectionColor} />

          <Box>
            <HStack>
              <FaHistory />
              <Heading as="h3" fontSize="xl" color={sectionColor}>
                Our Beginning
              </Heading>
            </HStack>
            <Text as="p" fontSize="lg" color={textColor}>
              Welcome to our corner of the internet! We&apos;re{" "}
              <Text as={"b"} color={"green.400"}>
                Jeffrey
              </Text>{" "}
              and{" "}
              <Text as={"b"} color={"green.400"}>
                Linjing
              </Text>
              , a dynamic duo who met at Rensselaer Polytechnic Institute in the charming town of Troy, New York. Our
              story began in the fall of 2011 when mutual friends introduced us. By December of that year, we were
              officially a couple. Just a few years later, on February 18, 2014, we eloped to the historic City Hall in
              Boston, Massachusetts to tie the knot.
            </Text>
          </Box>

          <Divider borderColor={sectionColor} />

          <Box>
            <HStack>
              <FaUserGraduate />
              <Heading as="h3" fontSize="xl" color={sectionColor}>
                Our Backgrounds
              </Heading>
            </HStack>
            <Text as="p" fontSize="lg" color={textColor}>
              Jeffrey holds a degree in Computer & Systems Engineering, bringing a wealth of technical expertise to our
              team.
            </Text>
            <Text as="p" fontSize="lg" color={textColor}>
              Linjing complements this with an MBA in Accounting and Finance, ensuring we have a strong foundation in
              both technology and business.
            </Text>
            <Text as="p" fontSize="lg" color={textColor}>
              Together, we blend our skills to tackle challenges with precision and financial acumen, making us a
              dynamic duo in both our personal and professional lives.
            </Text>
          </Box>

          <Divider borderColor={sectionColor} />

          <Box>
            <HStack>
              <FaPlane />
              <Heading as="h3" fontSize="xl" color={sectionColor}>
                Our Move to California
              </Heading>
            </HStack>
            <Text as="p" fontSize="lg" color={textColor}>
              After a few years of East Coast living, we decided to trade the cold winters for the sunny skies of
              California. We first settled in Orange, California, on April 29, 2017, but soon found our forever home in
              Irvine, where we’ve been enjoying the vibrant community and fantastic weather ever since.
            </Text>
          </Box>

          <Divider borderColor={sectionColor} />

          <Box>
            <HStack>
              <FaHeart />
              <Heading as="h3" fontSize="xl" color={sectionColor}>
                Our Journey Together
              </Heading>
            </HStack>
            <Text as="p" fontSize="lg" color={textColor}>
              We’ve been married for over a decade now, and our journey together has been nothing short of amazing.
              We’ve shared countless adventures, both big and small, and we’re excited to continue this journey with you
              as we explore new horizons.
            </Text>
          </Box>

          <Divider borderColor={sectionColor} />

          <Box>
            <HStack>
              <FaHandsHelping />
              <Heading as="h3" fontSize="xl" color={sectionColor}>
                Thank You
              </Heading>
            </HStack>
            <Text as="p" fontSize="lg" color={textColor}>
              Thank you for stopping by and getting to know us a little better. We hope our story inspires you and
              brings a smile to your face. Here’s to many more adventures, both online and off!
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
