import { extendTheme } from "@chakra-ui/react";
import { Theme } from "./nterfaces";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  // add your theme config here
});

export default theme;
