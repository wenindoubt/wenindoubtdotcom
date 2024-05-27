"use client";
import { Button, Center, Link, Stack, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

type SocialButtonsProps = {
  facebookLink: string;
  linkedinLink: string;
  instagramLink: string;
};

export default function SocialMediaButtons({ instagramLink, facebookLink, linkedinLink }: SocialButtonsProps) {
  return (
    <Stack spacing={4} mt={4}>
      <Link href={instagramLink} isExternal w={"full"}>
        <Button
          w={"full"}
          bgGradient="linear(to-r, #833ab4, #fd1d1d, #fcb045)" // Instagram gradient color
          color={"white"}
          leftIcon={<FaInstagram />}
          _hover={{
            bgGradient: "linear(to-r, #fd1d1d, #833ab4, #fcb045)",
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          <Center>
            <Text>Instagram</Text>
          </Center>
        </Button>
      </Link>

      <Link href={facebookLink} isExternal w={"full"}>
        <Button
          w={"full"}
          colorScheme={"facebook"}
          leftIcon={<FaFacebook />}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          <Center>
            <Text>Facebook</Text>
          </Center>
        </Button>
      </Link>

      <Link href={linkedinLink} isExternal w={"full"}>
        <Button
          w={"full"}
          colorScheme={"messenger"}
          leftIcon={<SiLinkedin />}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          <Center>
            <Text>LinkedIn</Text>
          </Center>
        </Button>
      </Link>
    </Stack>
  );
}
