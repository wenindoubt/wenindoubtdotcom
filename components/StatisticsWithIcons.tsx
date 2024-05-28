"with client";
import { Box, chakra, Flex, SimpleGrid, Stat, StatLabel, StatNumber, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaHome, FaRegCalendarAlt } from "react-icons/fa";
import { GiEngagementRing, GiPalmTree } from "react-icons/gi";
import { PiCheersFill } from "react-icons/pi";

type StatsCardProps = {
  title: string;
  stat: string;
  icon: ReactNode;
};

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={"auto"} color={useColorModeValue("gray.800", "gray.200")} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function StatisticsWithIcons() {
  return (
    <Box maxW="7xl" mx={"auto"} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={"center"} fontSize={"4xl"} py={10} fontWeight={"bold"}>
        Milestones
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={"First Encounter"} stat={"Fall 2011"} icon={<FaRegCalendarAlt size={"3em"} />} />
        <StatsCard title={"Eloped"} stat={"February 18th, 2014"} icon={<GiEngagementRing size={"3em"} />} />
        <StatsCard title={"Moved to California"} stat={"April 29th, 2017"} icon={<GiPalmTree size={"3em"} />} />
        <StatsCard title={"Our First Nest"} stat={"December 20th, 2021"} icon={<FaHome size={"3em"} />} />
        <StatsCard
          title={"10-Year Marriage Anniversary "}
          stat={"February 18th, 2024"}
          icon={<PiCheersFill size={"3em"} />}
        />
        <StatsCard title={"Net Worth"} stat={"$1,000,000+"} icon={<AiFillDollarCircle size={"3em"} />} />
      </SimpleGrid>
    </Box>
  );
}
