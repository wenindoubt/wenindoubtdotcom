"use client";

import { Box, Button, Center, Link, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

type SocialButtonsProps = {
  facebookLink: string;
  linkedinLink: string;
  instagramLink: string;
};

const isMobileDevice = () => {
  if (typeof window !== "undefined" && typeof navigator !== "undefined") {
    return /Mobi|Android/i.test(navigator.userAgent);
  }
  return false;
};

const getFacebookAppLink = (url: string) => {
  // Check if the URL is a profile link
  const profileMatch = url.match(/facebook\.com\/([^/?]+)/);
  if (profileMatch) {
    const profileId = profileMatch[1];
    return `fb://profile/${profileId}`;
  }
  return url;
};

export default function SocialMediaButtons({ instagramLink, facebookLink, linkedinLink }: SocialButtonsProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  const getFacebookLink = () => {
    if (isMobile) {
      return getFacebookAppLink(facebookLink);
    }
    return facebookLink;
  };

  return (
    <Stack spacing={4} mt={4}>
      {isMobile ? (
        <Box bg="yellow.100" p={4} borderRadius="md">
          <Text>You are using a mobile device.</Text>
        </Box>
      ) : (
        <Box bg="blue.100" p={4} borderRadius="md">
          <Text>You are not using a mobile device.</Text>
        </Box>
      )}

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

      <Link href={getFacebookLink()} isExternal w={"full"}>
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
