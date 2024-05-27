"use client";
import { CheckIcon } from "@chakra-ui/icons";
import { Box, Center, List, ListIcon, ListItem, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function CurrentProperties() {
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
        >
          <Box
            h={"160px"}
            bgImage={
              "url('https://d136ifrww9cs61.cloudfront.net/3610/conversions/8bcea09f27f4d88a166a37210d39d876-image_cropped.jpg')"
            }
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
              color={"green.500"}
              rounded={"full"}
            >
              Primary
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"3xl"}>$</Text>
              <Text fontSize={"6xl"} fontWeight={800}>
                1.2 M
              </Text>
              <Text color={"gray.500"}>FMV</Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Irvine, CA
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                House Hacking
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Roommate
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Homebase
              </ListItem>
            </List>
          </Box>
        </Box>
      </Center>

      {/* Brevator */}
      <Center py={6}>
        <Box
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Box
            h={"160px"}
            bgImage={
              "url('https://a.travel-assets.com/findyours-php/viewfinder/images/res70/265000/265903-New-York-State-Capitol-Building.jpg')"
            }
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
                307 K
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
                Long Term Rental
              </ListItem>
            </List>
          </Box>
        </Box>
      </Center>

      {/* Detroit, Michigan */}
      <Center py={6}>
        <Box
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Box
            h={"160px"}
            bgImage={
              "url('https://www.michigan.org/sites/default/files/styles/large/public/2022-04/dtw_22_ss_camp_Week1_Visit_Detroit_Growing_Skyline_S_Ferguson.jpg?itok=9-3lMdtM')"
            }
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
                3.1 M
              </Text>
              <Text color={"gray.500"}>FMV</Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Detroit, Michigan
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                61-Units
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Syndication
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Limited Partners
              </ListItem>
            </List>
          </Box>
        </Box>
      </Center>
    </SimpleGrid>
  );
}
