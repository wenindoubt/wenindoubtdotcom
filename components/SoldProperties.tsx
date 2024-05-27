"use client";
import { CheckIcon } from "@chakra-ui/icons";
import { Box, Center, List, ListIcon, ListItem, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function SoldProperties() {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }}>
      <Center py={6}>
        <Box
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          position="relative" // Ensure position is relative
        >
          {/* Sold Banner */}
          <Box
            position="absolute"
            top="20px"
            right="-50px"
            width="200px"
            transform="rotate(45deg)"
            bg="red.500"
            color="white"
            textAlign="center"
            zIndex="1"
            fontFamily="'Roboto', sans-serif" // Use Roboto font
          >
            <Text fontSize="2xl" fontWeight="bold" p={1} textTransform="uppercase">
              Sold
            </Text>
          </Box>

          <Box
            h={"160px"}
            bgImage={"url('https://www.waywardblog.com/wp-content/uploads/2022/08/Albany-New-York-Street-View.jpg')"}
            bgSize={"cover"}
            bgPosition={"center"}
          />
          <Stack textAlign={"center"} p={6} color={useColorModeValue("gray.800", "white")} align={"center"}>
            <Text
              fontSize={"sm"}
              fontWeight={500}
              bg={useColorModeValue("green.50", "green.900")}
              p={2}
              px={3}
              color={"blue.500"}
              rounded={"full"}
            >
              Investment
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"3xl"}>$</Text>
              <Text fontSize={"6xl"} fontWeight={800}>
                265 K
              </Text>
              <Text color={"gray.500"}>FMV</Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Albany, NY
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Duplex
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Co-Managing Members
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                4-Month Fix & Flip
              </ListItem>
            </List>
          </Box>
        </Box>
      </Center>
    </SimpleGrid>
  );
}
