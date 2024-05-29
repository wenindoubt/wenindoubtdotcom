"use client";
import { Avatar, Box, Flex, keyframes } from "@chakra-ui/react";

type AvatarWithRippleProps = {
  src: string;
};

export default function AvatarWithRipple({ src }: AvatarWithRippleProps) {
  const size = "96px";
  const color = "teal";

  const pulseRing = keyframes`
  0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
  `;

  return (
    <Flex justifyContent="center" alignItems="center" h="100px" w="full" overflow="hidden">
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: "absolute",
          display: "block",
          width: "300%",
          height: "300%",
          boxSizing: "border-box",
          marginLeft: "-100%",
          marginTop: "-100%",
          borderRadius: "50%",
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite`,
        }}
      >
        <Avatar src={src} size="full" position="absolute" top={0} />
      </Box>
    </Flex>
  );
}
