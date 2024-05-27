"use client";
import { Box, Center, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import AvatarWithRipple from "./AvatarWithRipple";
import SocialMediaButtons from "./SocialMediaButtons";

export default function Cards() {
  return (
    <Center py={6}>
      <Flex direction="column" gap={6}>
        <Flex justify="center" gap={6} wrap="wrap">
          <Box
            maxW={"270px"}
            w={"270px"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"120px"}
              w={"full"}
              src={
                "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              }
              alt="background"
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <AvatarWithRipple src={"/jeffrey.jpeg"} />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  Jeffrey Wen
                </Heading>
                <Text color={"gray.500"}>Managing Member</Text>
              </Stack>
              <SocialMediaButtons
                instagramLink={"https://www.instagram.com/wen.jeffrey/"}
                facebookLink={"https://www.facebook.com/jeffreywenindoubt/"}
                linkedinLink={"https://www.linkedin.com/in/wenindoubt/"}
              />
            </Box>
          </Box>

          <Box
            maxW={"270px"}
            w={"270px"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"120px"}
              w={"full"}
              src={
                "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              }
              alt="background"
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <AvatarWithRipple src={"/linjing.png"} />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  Linjing Wen
                </Heading>
                <Text color={"gray.500"}>Managing Member</Text>
              </Stack>
              <SocialMediaButtons
                instagramLink={"https://www.instagram.com/l_meets_j/"}
                facebookLink={"https://www.facebook.com/lmeetsj"}
                linkedinLink={"https://www.linkedin.com/in/linjing-wen/"}
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Center>
  );
}
