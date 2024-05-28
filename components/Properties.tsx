"use client";
import { CheckIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Center,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Properties() {
  const properties = [
    {
      title: "Primary",
      price: "1.2 M",
      imageUrl:
        "https://d136ifrww9cs61.cloudfront.net/3610/conversions/8bcea09f27f4d88a166a37210d39d876-image_cropped.jpg",
      location: "Irvine, CA",
      details: ["House Hacking", "Roommate", "Homebase"],
      color: "green.500",
      bgColor: "green.50",
    },
    {
      title: "Investment",
      price: "307 K",
      imageUrl:
        "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/265000/265903-New-York-State-Capitol-Building.jpg",
      location: "Albany, NY",
      details: ["Duplex", "Co-Managing Members", "Long Term Rental"],
      color: "purple.500",
      bgColor: "green.50",
    },
    {
      title: "Investment",
      price: "3.1 M",
      imageUrl:
        "https://www.michigan.org/sites/default/files/styles/large/public/2022-04/dtw_22_ss_camp_Week1_Visit_Detroit_Growing_Skyline_S_Ferguson.jpg?itok=9-3lMdtM",
      location: "Detroit, Michigan",
      details: ["61-Units", "Syndication", "Limited Partners"],
      color: "purple.500",
      bgColor: "green.50",
    },
    {
      title: "Investment",
      price: "265 K",
      imageUrl:
        "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/265000/265903-New-York-State-Capitol-Building.jpg",
      location: "Albany, NY",
      details: ["Duplex", "Co-Managing Members", "4-Month Fix & Flip"],
      color: "red.500",
      bgColor: "red.50",
      sold: true, // Add a sold property indicator
    },
  ];

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const listBgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Box maxW="1200px" mx="auto" px={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} py={6}>
        {properties.map((property, index) => (
          <Center key={index} position="relative">
            <Box maxW={"330px"} w={"full"} bg={bgColor} boxShadow={"2xl"} rounded={"md"} overflow={"hidden"}>
              <Box position="relative">
                <Box h={"160px"} bgImage={`url(${property.imageUrl})`} bgSize={"cover"} bgPosition={"center"} />
                {property.sold && (
                  <Badge
                    position="absolute"
                    top="10px"
                    left="10px"
                    colorScheme="red"
                    fontSize="0.9em"
                    padding="4px 8px"
                    borderRadius="md"
                  >
                    SOLD
                  </Badge>
                )}
              </Box>
              <Stack textAlign={"center"} p={6} color={textColor} align={"center"}>
                <Text
                  fontSize={"sm"}
                  fontWeight={500}
                  bg={property.bgColor}
                  p={2}
                  px={3}
                  color={property.color}
                  rounded={"full"}
                >
                  {property.title}
                </Text>
                <Stack direction={"row"} align={"center"} justify={"center"}>
                  <Text fontSize={"3xl"}>$</Text>
                  <Text fontSize={"6xl"} fontWeight={800}>
                    {property.price}
                  </Text>
                  <Text color={"gray.500"}>FMV</Text>
                </Stack>
              </Stack>
              <Box bg={listBgColor} px={6} py={10}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    {property.location}
                  </ListItem>
                  {property.details.map((detail, index) => (
                    <ListItem key={index}>
                      <ListIcon as={CheckIcon} color="green.400" />
                      {detail}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </Box>
  );
}
