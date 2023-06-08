"use client";

import {
  Box,
  Container,
  Stack,
  Link,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

export default function Header() {

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
    
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href={"http://localhost:3000/"}>Home</Link>
          <Link href={"#"}>About</Link>
          <Link href={"/Maps/Maps1"}>Maps</Link>
          <Link href={"/Contact/Contact"}>Contact</Link>
          <Link href={"/blog/Post"}>Blog</Link>
        </Stack>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"/auth/Login"}
          >
            Sign In
          </Button>

          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            href={"/auth/Register"}
            bg={"yellow.500"}
            _hover={{
              bg: "yellow.400",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
