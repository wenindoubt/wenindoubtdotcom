"use client";
import { CopyIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Image, Stack, Text, useColorModeValue, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AvatarWithRipple from "./AvatarWithRipple";
import SocialMediaButtons from "./SocialMediaButtons";

const MotionBox = motion(Box);

type CardsProps = {
  name: string;
  role: string;
  avatarSrc: string;
  email: string;
  instagramLink: string;
  facebookLink: string;
  linkedinLink: string;
};

const Cards = ({ name, role, avatarSrc, email, instagramLink, facebookLink, linkedinLink }: CardsProps) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const toast = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        toast({
          title: "Email copied!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      },
      (err) => {
        toast({
          title: "Failed to copy!",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      },
    );
  };

  return (
    <MotionBox maxW={"320px"} w={"full"} bg={bgColor} boxShadow={"2xl"} rounded={"md"} overflow={"hidden"} m={4}>
      <Image
        h={"140px"}
        w={"full"}
        src={
          "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
        alt="background"
        objectFit={"cover"}
      />
      <Flex justify={"center"} mt={-12}>
        <AvatarWithRipple src={avatarSrc} />
      </Flex>
      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {name}
          </Heading>
          <Text color={"gray.500"}>{role}</Text>
        </Stack>
        <Flex align={"center"} justify="center" mb={5}>
          <Text color="teal.500" fontWeight={600} mr={2}>
            {email}
          </Text>
          <Button
            colorScheme="teal"
            variant="ghost"
            onClick={handleCopy}
            _hover={{ bg: useColorModeValue("teal.100", "teal.900") }}
            size="sm"
          >
            <CopyIcon />
          </Button>
        </Flex>
        <SocialMediaButtons instagramLink={instagramLink} facebookLink={facebookLink} linkedinLink={linkedinLink} />
      </Box>
    </MotionBox>
  );
};

export default Cards;
