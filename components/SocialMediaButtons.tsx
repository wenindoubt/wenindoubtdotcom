"use client";
import { DownloadIcon } from "@chakra-ui/icons";
import { Button, Center, Link, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

type SocialButtonsProps = {
  facebookLink: string;
  linkedinLink: string;
  instagramLink: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  address: string;
  company: string;
  website: string;
  avatarSrc: string;
};

const MotionButton = motion(Button);

const generateVCard = async (
  name: string,
  role: string,
  email: string,
  phone: string,
  address: string,
  company: string,
  website: string,
  avatarSrc: string,
  facebookLink: string,
  linkedinLink: string,
  instagramLink: string,
) => {
  const [firstName, ...lastNameArray] = name.split(" ");
  const lastName = lastNameArray.join(" ");

  const base64Image: string = await fetch(avatarSrc)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        }),
    );

  return `
BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${name}
ORG:${company}
TITLE:${role}
EMAIL;TYPE=INTERNET:${email}
TEL;TYPE=CELL:${phone}
ADR;TYPE=WORK:;;${address}
URL:${website}
PHOTO;ENCODING=b;TYPE=JPEG:${base64Image.split(",")[1]}
X-SOCIALPROFILE;TYPE=Facebook:${facebookLink}
X-SOCIALPROFILE;TYPE=LinkedIn:${linkedinLink}
X-SOCIALPROFILE;TYPE=Instagram:${instagramLink}
END:VCARD
`;
};

export default function SocialMediaButtons({
  facebookLink,
  instagramLink,
  linkedinLink,
  name,
  role,
  email,
  phone,
  address,
  company,
  website,
  avatarSrc,
}: SocialButtonsProps) {
  const isFacebookDisabled = useBreakpointValue({ base: true, md: false });

  const handleDownloadVCard = async () => {
    const vCardContent = await generateVCard(
      name,
      role,
      email,
      phone,
      address,
      company,
      website,
      avatarSrc,
      facebookLink,
      linkedinLink,
      instagramLink,
    );
    const blob = new Blob([vCardContent], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name.replace(" ", "_")}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Stack spacing={4} mt={4}>
      <MotionButton
        w={"full"}
        colorScheme="blue"
        variant="solid"
        leftIcon={<DownloadIcon />}
        onClick={handleDownloadVCard}
      >
        <Center>
          <Text>Add Contact</Text>
        </Center>
      </MotionButton>

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
