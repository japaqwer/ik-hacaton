import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Input,
} from "@chakra-ui/react";
import React from "react";

export default function MapsData() {
  return (
    <Center>
          <Accordion allowToggle w={"30%"}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box>
                  <input type={"radio"} name="fav_language" /> 1
                </Box>
                <Box>
                  <input type={"radio"} name="fav_language" /> 2
                </Box>
                <Box>
                  <input type={"radio"} name="fav_language" /> 3
                </Box>
                <Box>
                  <input type={"radio"} name="fav_language" /> 4
                </Box>
                <Box>
                  <input type={"radio"} name="fav_language" /> 5
                </Box>
                <Box>
                  <input type={"radio"} name="fav_language" /> 6
                </Box>
                <Box>
                  <input type={"radio"} name="fav_language" /> 7
                </Box>
                <Box>
                  <input type={"radio"} name="fav_language" /> 8
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        <Box>
          от <input type={"date"} /> до <input type={"date"} />
        </Box>
    </Center>
  );
}
