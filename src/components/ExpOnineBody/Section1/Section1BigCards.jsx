import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { newCardData } from "./newData";
import CardSlider from "../../Slider/CardSlider";
import NewCard from "./NewCard";
import { breakpointForNewWeek } from "../../Slider/breakPoints";



const Section1BigCards = () => {
  return (
    <Box>
      <Flex justify="space-between" align="center">
        <Heading as="h2" size="lg" py="1.5rem">
          New this week
        </Heading>
        <Text>Show {`(${newCardData.length})`}</Text>
      </Flex>
      <CardSlider
        cardData={newCardData}
        Card={NewCard}
        breakpoints={breakpointForNewWeek}
      />
    </Box>
  );
};


export default Section1BigCards;