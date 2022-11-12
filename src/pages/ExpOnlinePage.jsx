import React from "react";
import Header from "../components/header/Header";
import { Box, HStack, Stack } from "@chakra-ui/react";
import Section1BigCards from "../components/ExpOnineBody/Section1/Section1BigCards";
import Section2MiniCards from "../components/ExpOnineBody/section2/Section2MiniCards";
import Section3MiniCards from "../components/ExpOnineBody/section3/Section3MiniCards";

// Airbnb experience online page - body

const ExpOnlinePage = () => {
  return (
    <Box>
      <Header />
      <Stack p={["1rem", "1rem", "3rem"]} spacing="4rem">
        {/* section1 - Weekly new */}

        <Box>
          <Section1BigCards />
        </Box>

        {/* section2 - plan for trip */}

        <Box>
          <Section2MiniCards />
        </Box>

        {/* section3 - top sellers */}

        <Box>
          <Section3MiniCards />
        </Box>
      </Stack>
    </Box>
  );
};

export default ExpOnlinePage;
