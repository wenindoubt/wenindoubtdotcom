"use client";
import { Button, Center, Link, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

type SocialButtonsProps = {
  facebookLink: string;
  linkedinLink: string;
  instagramLink: string;
};

const MotionButton = motion(Button);

export default function SocialMediaButtons({ facebookLink, instagramLink, linkedinLink }: SocialButtonsProps) {
  const isFacebookDisabled = useBreakpointValue({ base: true, md: false });

  return (
    <Stack spacing={4} mt={4}>
      <Link href={linkedinLink} isExternal w={"full"}>
        <MotionButton w={"full"} colorScheme={"messenger"} leftIcon={<SiLinkedin />}>
          <Center>
            <Text>LinkedIn</Text>
          </Center>
        </MotionButton>
      </Link>

      <Link href={instagramLink} isExternal w={"full"}>
        <MotionButton
          w={"full"}
          bgGradient="linear(to-r, #833ab4, #fd1d1d, #fcb045)"
          color={"white"}
          leftIcon={<FaInstagram />}
          _hover={{
            bgGradient: "linear(to-r, #833ab4, #fd1d1d, #fcb045)", // Ensure gradient is maintained on hover
          }}
        >
          <Center>
            <Text>Instagram</Text>
          </Center>
        </MotionButton>
      </Link>

      <Link href={facebookLink} isExternal w={"full"}>
        <MotionButton
          w={"full"}
          colorScheme={"facebook"}
          leftIcon={<FaFacebook />}
          isDisabled={isFacebookDisabled}
          opacity={isFacebookDisabled ? 0.6 : 1}
          cursor={isFacebookDisabled ? "not-allowed" : "pointer"}
        >
          <Center>
            <Text>Facebook</Text>
          </Center>
        </MotionButton>
      </Link>
    </Stack>
  );
}
