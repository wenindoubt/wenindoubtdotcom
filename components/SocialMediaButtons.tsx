"use client";

import { Button, Center, Link, Stack, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

type SocialButtonsProps = {
  facebookLink: string;
  linkedinLink: string;
  instagramLink: string;
};

export default function SocialMediaButtons({ instagramLink, linkedinLink }: SocialButtonsProps) {
  return (
    <Stack spacing={4} mt={4}>
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

      <Button
        w={"full"}
        colorScheme={"facebook"}
        leftIcon={<FaFacebook />}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
        isDisabled
        opacity={0.6} // to visually indicate the button is disabled
        cursor="not-allowed" // change cursor to indicate non-clickable
      >
        <Center>
          <Text>Facebook</Text>
        </Center>
      </Button>
    </Stack>
  );
}
