"use client";
import StatisticsWithIcons from "@/components/StatisticsWithIcons";
import { Box, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function May272024() {
  return (
    <Container maxW={"7xl"} p="12">
      <Box display="flex" justifyContent="center">
        <Image
          borderRadius="lg"
          src={"/us.jpeg"}
          alt="some good alt text"
          objectFit="contain"
          width="30%" // Make the image 20% smaller
          transition="0.3s ease-in-out"
          _hover={{
            transform: "scale(1.05)",
          }}
        />
      </Box>
      <StatisticsWithIcons />
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">10 Years of Marriage</Heading>

        <Text as={"span"} color={"green.400"}></Text>
        <Text as="p" fontSize="lg">
          Welcome to our corner of the internet! We&apos;re{" "}
          <Text as={"b"} color={"green.400"}>
            {" "}
            Jeffrey{" "}
          </Text>{" "}
          and{" "}
          <Text as={"b"} color={"green.400"}>
            Linjing
          </Text>
          , a dynamic duo who met at Rensselaer Polytechnic Institute in the charming town of Troy, New York. Our story
          began in the fall of 2011 when mutual friends introduced us. By December of that year, we were officially a
          couple. Just a few years later, on February 18, 2014, we eloped to the historic City Hall in Boston,
          Massachusetts to tie the knot.{" "}
        </Text>
        <Text as="p" fontSize="lg">
          Jeffrey here, with a background in Computer & Systems Engineering, while Linjing brings her expertise with an
          MBA in Accounting and Finance. Together, we combine technical precision with financial savvy, making us a
          formidable team in both life and business.
        </Text>
        <Text as="p" fontSize="lg">
          After a few years of East Coast living, we decided to trade the cold winters for the sunny skies of
          California. We first settled in Orange, California, on April 29, 2017, but soon found our forever home in
          Irvine, where we’ve been enjoying the vibrant community and fantastic weather ever since.
        </Text>
        <Text as="p" fontSize="lg">
          We’ve been married for over a decade now, and our journey together has been nothing short of amazing. We’ve
          shared countless adventures, both big and small, and we’re excited to continue this journey with you as we
          explore new horizons.
        </Text>
        <Text as="p" fontSize="lg">
          Thank you for stopping by and getting to know us a little better. We hope our story inspires you and brings a
          smile to your face. Here’s to many more adventures, both online and off!
        </Text>
      </VStack>
    </Container>
  );
}
