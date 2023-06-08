import { Box, useBreakpointValue } from "@chakra-ui/react";

interface BackgroundImageProps {
  imageUrl: string;
  children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  children,
}) => {
  const height = useBreakpointValue({ base: "50vh", md: "100vh" });
  const width = useBreakpointValue({ base: "100%", md: "100%" });

  return (
    <Box
      bgImage={`url(${imageUrl})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      width="100%"
      height={height}
    >
      {children}
    </Box>
  );
};

export default BackgroundImage;
