import Cards from "@/components/Cards";
import { Flex } from "@chakra-ui/react";

const ContactPage = () => {
  return (
    <Flex justify="center" wrap="wrap">
      <Cards
        name="Jeffrey Wen"
        role="Managing Member"
        avatarSrc="/jeffrey.jpeg"
        email="jeffrey@wenindoubt.com"
        phone="518-867-2011"
        address="Irvine, CA 92618"
        company="WenInDoubt LLC"
        website="https://www.wenindoubt.com/"
        instagramLink="https://www.instagram.com/wen.jeffrey/"
        facebookLink="https://www.facebook.com/jeffreywenindoubt/"
        linkedinLink="https://www.linkedin.com/in/wenindoubt/"
      />
      <Cards
        name="Linjing Wen"
        role="Managing Member"
        avatarSrc="linjing.png"
        email="linjing@wenindoubt.com"
        phone="518-421-3291"
        address="Irvine, CA 92618"
        company="WenInDoubt LLC"
        website="https://www.wenindoubt.com/"
        instagramLink="https://www.instagram.com/l_meets_j/"
        facebookLink="https://www.facebook.com/lmeetsj"
        linkedinLink="https://www.linkedin.com/in/linjing-wen/"
      />
    </Flex>
  );
};

export default ContactPage;
