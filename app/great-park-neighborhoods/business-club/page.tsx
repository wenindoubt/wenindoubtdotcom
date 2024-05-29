"use client";
import { Avatar, Box, Flex, Link, SimpleGrid, Text, chakra, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const testimonials = [
  {
    name: "Natasha Geverola",
    role: "Founder @ NCG Design",
    content: "Testimonial content will be updated soon.",
    avatar: "https://picsum.photos/200",
  },
  {
    name: "Bryan Ruef",
    role: "Founder, Director of Technology @ 10-8 Systems",
    content: "Testimonial content will be updated soon.",
    avatar: "https://picsum.photos/201",
  },
  {
    name: "Athena Yap",
    role: "Founder & CEO @ Goshsha",
    content: "Testimonial content will be updated soon.",
    avatar: "https://picsum.photos/202",
  },
  {
    name: "Marjorie Lashmet",
    role: "Founder & CEO @ 329 Events",
    content: "Testimonial content will be updated soon.",
    avatar: "https://picsum.photos/203",
  },
  {
    name: "Fauzia Lala",
    role: "Founder & CE(Empowerment)O @ Defense Ninjas",
    content: "Testimonial content will be updated soon.",
    avatar: "https://picsum.photos/204",
  },
  {
    name: "Aaron Trimble",
    role: "Founder @ My Perfect Homestay",
    content: "Testimonial content will be updated soon.",
    avatar: "https://picsum.photos/205",
  },
  {
    name: "Calvin Stewart",
    role: "Venture Scout @ Beyond Capital",
    content: "Testimonial content will be updated soon.",
    avatar: "https://picsum.photos/206",
  },
  {
    name: "Bracy Fuentes",
    role: "Ideation Navigation @ RevHubOC",
    content: "Testimonial content will be updated soon.",
    avatar: "https://picsum.photos/207",
  },
  {
    name: "Joshua Dominic",
    role: "Founder & CEO @ Dreamstar Lines",
    content: "Testimonial content will be updated soon.",
    avatar: "https://picsum.photos/208",
  },
  {
    name: "Costin Tuculescu",
    role: "Founder & CEO @ ONSCREEN",
    content: "Testimonial content will be updated soon.",
    avatar: "https://picsum.photos/209",
  },
];

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

const MotionFlex = motion(Flex);

function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, content, avatar, index } = props;
  return (
    <MotionFlex
      boxShadow={"lg"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={10}
      justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("white", "gray.800")}
      _after={{
        content: '""',
        position: "absolute",
        height: "21px",
        width: "29px",
        left: "35px",
        top: "-10px",
        backgroundSize: "cover",
      }}
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        maxW: "640px",
        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Flex direction={"column"} textAlign={"left"} justifyContent={"space-between"}>
        <chakra.p fontFamily={"Inter"} fontWeight={"medium"} fontSize={"15px"} pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontFamily={"Work Sans"} fontWeight={"bold"} fontSize={14}>
          {name}
          <chakra.span fontFamily={"Inter"} fontWeight={"medium"} color={"gray.500"}>
            {" "}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={"80px"}
        width={"80px"}
        alignSelf={"center"}
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
      />
    </MotionFlex>
  );
}

const generateGoogleCalendarLink = (
  title: string,
  details: string,
  location: string,
  startDate: string,
  endDate: string,
) => {
  const baseUrl = "https://calendar.google.com/calendar/r/eventedit";
  const params = new URLSearchParams({
    text: title,
    details: details,
    location: location,
    dates: `${startDate}/${endDate}`,
  });
  return `${baseUrl}?${params.toString()}`;
};

export default function GridBlurredBackdrop() {
  const businessClubEventLink = generateGoogleCalendarLink(
    "Business Club Event",
    "Join us for insightful presentations, valuable networking opportunities, and engaging discussions with top industry leaders and like-minded professionals.",
    "Rise Clubhouse, 238 Merit, Irvine, CA 92618",
    "20240604T190000",
    "20240604T210000",
  );

  const upcomingEventLink = generateGoogleCalendarLink(
    "How to Build a Business",
    "Topic: How to Build a Business\nPresenter: Naiya Mehta, Attorney & Investor @ Lyric Investment Group\nJoin us for valuable networking, insightful presentations, and engaging discussions with industry leaders. Expand your knowledge and grow your business connections.",
    "Rise Clubhouse, 238 Merit, Irvine, CA 92618",
    "20240604T190000",
    "20240604T210000",
  );

  return (
    <Flex textAlign={"center"} justifyContent={"center"} direction={"column"} width={"full"} overflow={"hidden"}>
      <Box
        textAlign="center"
        p={8}
        bg={useColorModeValue("gray.100", "gray.700")}
        borderRadius="md"
        boxShadow="lg"
        mb={10}
      >
        <chakra.h2
          fontSize={32}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.50")}
        >
          Business Club Event
        </chakra.h2>
        <Text fontSize={18} fontFamily={"Inter"} color={useColorModeValue("gray.600", "gray.300")}>
          Connect, Learn, and Grow with Industry Leaders
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={6}>
          <MotionFlex
            p={6}
            bg={useColorModeValue("white", "gray.800")}
            borderRadius="md"
            boxShadow="md"
            textAlign="left"
            display="flex"
            alignItems="center"
            maxW="800px"
            mx="auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box flex="1">
              <chakra.h2
                fontSize={24}
                fontFamily={"Work Sans"}
                fontWeight={"bold"}
                color={useColorModeValue("gray.700", "gray.50")}
                mb={4}
              >
                Business Club Event
              </chakra.h2>
              <Text fontSize={18} fontFamily={"Inter"} color={useColorModeValue("gray.600", "gray.300")} mb={2}>
                <chakra.span fontWeight={"bold"} color={useColorModeValue("gray.700", "gray.50")}>
                  When:
                </chakra.span>{" "}
                First Tuesday of every month{" "}
              </Text>
              <Text fontSize={18} fontFamily={"Inter"} color={useColorModeValue("gray.600", "gray.300")} mb={2}>
                <chakra.span fontWeight={"bold"} color={useColorModeValue("gray.700", "gray.50")}>
                  Where:
                </chakra.span>{" "}
                <chakra.span
                  fontFamily={"Inter"}
                  fontWeight={"semibold"}
                  color={useColorModeValue("teal.500", "teal.300")}
                >
                  Rise Clubhouse
                </chakra.span>
                , 238 Merit, Irvine, CA 92618{" "}
              </Text>
              <Text fontSize={18} fontFamily={"Inter"} color={useColorModeValue("gray.600", "gray.300")} mb={2}>
                <chakra.span fontWeight={"bold"} color={useColorModeValue("gray.700", "gray.50")}>
                  Speakers:
                </chakra.span>{" "}
                Expert guest speakers from 7:00 PM - 8:00 PM
              </Text>
              <Text fontSize={18} fontFamily={"Inter"} color={useColorModeValue("gray.600", "gray.300")} mb={2}>
                <chakra.span fontWeight={"bold"} color={useColorModeValue("gray.700", "gray.50")}>
                  Networking:
                </chakra.span>{" "}
                Connect and grow your network from 8:00 PM - 9:00 PM
              </Text>
              <Text fontSize={18} fontFamily={"Inter"} color={useColorModeValue("gray.600", "gray.300")} mt={6}>
                Join us for valuable networking, insightful presentations, and engaging discussions with industry
                leaders. Expand your knowledge and grow your business connections.
              </Text>
            </Box>
          </MotionFlex>

          <MotionFlex
            p={6}
            bg={useColorModeValue("blue.100", "blue.800")}
            borderRadius="md"
            boxShadow="md"
            textAlign="left"
            display="flex"
            alignItems="center"
            maxW="800px"
            mx="auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box flex="1">
              <chakra.h2
                fontSize={24}
                fontFamily={"Work Sans"}
                fontWeight={"bold"}
                color={useColorModeValue("gray.700", "gray.50")}
                mb={4}
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                alignItems={{ base: "flex-start", md: "center" }}
                justifyContent={{ base: "flex-start", md: "space-between" }}
              >
                Upcoming Event
                <Link
                  href={upcomingEventLink}
                  isExternal
                  display="flex"
                  alignItems="center"
                  bg={useColorModeValue("blue.50", "blue.900")}
                  p={2}
                  borderRadius="md"
                  mt={{ base: 2, md: 0 }}
                  _hover={{ textDecoration: "none", bg: useColorModeValue("blue.100", "blue.800") }}
                >
                  <FaCalendarAlt style={{ display: "inline", marginRight: "5px" }} />
                  <chakra.span
                    fontFamily={"Inter"}
                    fontWeight={"medium"}
                    fontSize={16}
                    color={useColorModeValue("blue.700", "blue.200")}
                  >
                    Add to Google Calendar
                  </chakra.span>
                </Link>
              </chakra.h2>

              <Text fontSize={18} fontFamily={"Inter"} color={useColorModeValue("gray.600", "gray.300")} mb={2}>
                <chakra.span fontWeight={"bold"} color={useColorModeValue("gray.700", "gray.50")}>
                  When:
                </chakra.span>{" "}
                Tuesday, June 4th 2024 from 7:00 PM - 9:00 PM{" "}
              </Text>
              <Text fontSize={18} fontFamily={"Inter"} color={useColorModeValue("gray.600", "gray.300")} mb={2}>
                <chakra.span fontWeight={"bold"} color={useColorModeValue("gray.700", "gray.50")}>
                  Where:
                </chakra.span>{" "}
                <chakra.span
                  fontFamily={"Inter"}
                  fontWeight={"semibold"}
                  color={useColorModeValue("teal.500", "teal.300")}
                >
                  Rise Clubhouse
                </chakra.span>
                , 238 Merit, Irvine, CA 92618{" "}
              </Text>
              <Text fontSize={18} fontFamily={"Inter"} color={useColorModeValue("gray.600", "gray.300")} mb={2}>
                <chakra.span fontWeight={"bold"} color={useColorModeValue("gray.700", "gray.50")}>
                  Topic:
                </chakra.span>{" "}
                How to Build a Business
              </Text>
              <Text fontSize={18} fontFamily={"Inter"} color={useColorModeValue("gray.600", "gray.300")}>
                <chakra.span fontWeight={"bold"} color={useColorModeValue("gray.700", "gray.50")}>
                  Presenter:
                </chakra.span>{" "}
                Naiya Mehta, Attorney & Investor @ Lyric Investment Group
              </Text>
            </Box>
            <Avatar src="/naiya-mehta.jpeg" height={"80px"} width={"80px"} ml={4} />
          </MotionFlex>
        </SimpleGrid>
      </Box>

      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={"20"} mb={16} mx={"auto"}>
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} key={index} index={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
