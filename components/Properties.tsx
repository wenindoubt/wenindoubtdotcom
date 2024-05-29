"use client";
import { CheckIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Center,
  Flex,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { addMonths, differenceInDays, differenceInMonths } from "date-fns";
import { FaCheck, FaInfoCircle, FaTimes } from "react-icons/fa";
import { FaA, FaC, FaD, FaE, FaI, FaN, FaO, FaR, FaS, FaT, FaV } from "react-icons/fa6";

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
      purchasedDate: "12-20-2021",
      sold: false,
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
      purchasedDate: "01-31-2023",
      sold: false,
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
      purchasedDate: "05-31-2024",
      sold: false,
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
      purchasedDate: "11-08-2023",
      soldDate: "03-01-2024",
      sold: true,
    },
  ];

  const calculateHoldDuration = (purchasedDate: string, soldDate: string) => {
    const start = new Date(purchasedDate);
    const end = new Date(soldDate);
    const months = differenceInMonths(end, start);
    const intermediateDate = addMonths(start, months);
    const days = differenceInDays(end, intermediateDate);
    return `${months > 0 ? `${months} month${months > 1 ? "s" : ""} ` : ""}${days > 0 ? `${days} day${days > 1 ? "s" : ""}` : ""}`;
  };

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const listBgColor = useColorModeValue("gray.50", "gray.900");

  // Define the icons for each word
  const accreditedIcons = [FaA, FaC, FaC, FaR, FaE, FaD, FaI, FaT, FaE, FaD];
  const investorsIcons = [FaI, FaN, FaV, FaE, FaS, FaT, FaO, FaR, FaS];

  return (
    <Box maxW="1200px" mx="auto" px={4}>
      <Center
        w="100%"
        py={4}
        mb={6}
        bgGradient="linear(to-r, rgba(255, 255, 255, 0), rgba(0, 128, 128, 0.1), rgba(0, 128, 128, 0.1), rgba(255, 255, 255, 0))"
        color="gray.700"
        fontSize="lg"
        fontWeight="bold"
        textAlign="center"
        flexDirection="column"
      >
        <Flex align="center" gap={1}>
          <Icon as={FaCheck} boxSize={5} color="teal.500" />
          {accreditedIcons.map((IconComponent, index) => (
            <Icon as={IconComponent} boxSize={4} key={`accredited-${index}`} color="teal.500" />
          ))}
        </Flex>
        <Flex align="center" gap={1} mt={2}>
          <Icon as={FaCheck} boxSize={5} color="purple.500" />
          {investorsIcons.map((IconComponent, index) => (
            <Icon as={IconComponent} boxSize={4} key={`investors-${index}`} color="purple.500" />
          ))}
        </Flex>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} py={6}>
        {properties.map((property, index) => (
          <Center key={index} position="relative">
            <Box maxW={"330px"} w={"full"} bg={bgColor} boxShadow={"2xl"} rounded={"md"} overflow={"hidden"}>
              <Box position="relative">
                <Box h={"160px"} bgImage={`url(${property.imageUrl})`} bgSize={"cover"} bgPosition={"center"} />
                {property.sold ? (
                  <Badge
                    position="absolute"
                    top="10px"
                    left="10px"
                    colorScheme="red"
                    fontSize="0.9em"
                    padding="4px 8px"
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                  >
                    <FaTimes style={{ marginRight: "4px" }} /> SOLD
                  </Badge>
                ) : (
                  <Badge
                    position="absolute"
                    top="10px"
                    left="10px"
                    colorScheme="green"
                    fontSize="0.9em"
                    padding="4px 8px"
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                  >
                    <FaCheck style={{ marginRight: "4px" }} /> HOLDING
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
                <Box mt={4}>
                  <Tag size="lg" colorScheme="green" borderRadius="full">
                    <TagLeftIcon as={FaCheck} />
                    <TagLabel>Purchased: {property.purchasedDate}</TagLabel>
                  </Tag>
                  {property.sold && property.soldDate && (
                    <>
                      <Tag size="lg" colorScheme="red" borderRadius="full" ml={2}>
                        <TagLeftIcon as={FaTimes} />
                        <TagLabel>Sold: {property.soldDate}</TagLabel>
                      </Tag>
                      <Tooltip label={`Held for ${calculateHoldDuration(property.purchasedDate, property.soldDate)}`}>
                        <Tag size="lg" colorScheme="blue" borderRadius="full" ml={2} cursor="pointer">
                          <TagLeftIcon as={FaInfoCircle} />
                          <TagLabel>{`Held: ${calculateHoldDuration(property.purchasedDate, property.soldDate)}`}</TagLabel>
                        </Tag>
                      </Tooltip>
                    </>
                  )}
                </Box>
              </Box>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </Box>
  );
}
