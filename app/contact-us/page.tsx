import Cards from "@/components/Cards";
import { Box, Flex } from "@chakra-ui/react";

export default function ContactUs() {
  const cardData = [
    {
      name: "Jeffrey Wen",
      role: "Managing Member",
      avatarSrc: "/jeffrey.jpeg",
      email: "jeffrey@wenindoubt.com",
      instagramLink: "https://www.instagram.com/wen.jeffrey/",
      facebookLink: "https://www.facebook.com/jeffreywenindoubt/",
      linkedinLink: "https://www.linkedin.com/in/wenindoubt/",
    },
    {
      name: "Linjing Wen",
      role: "Managing Member",
      avatarSrc: "/linjing.png",
      email: "linjing@wenindoubt.com",
      instagramLink: "https://www.instagram.com/l_meets_j/",
      facebookLink: "https://www.facebook.com/lmeetsj",
      linkedinLink: "https://www.linkedin.com/in/linjing-wen/",
    },
  ];

  return (
    <Box p={8}>
      <Flex justify="center" gap={6} wrap="wrap">
        {cardData.map((person, index) => (
          <Cards
            key={index}
            name={person.name}
            role={person.role}
            avatarSrc={person.avatarSrc}
            email={person.email}
            instagramLink={person.instagramLink}
            facebookLink={person.facebookLink}
            linkedinLink={person.linkedinLink}
          />
        ))}
      </Flex>
    </Box>
  );
}
