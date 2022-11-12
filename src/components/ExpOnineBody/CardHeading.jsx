import React from "react";
import { Heading, Flex, Text} from "@chakra-ui/react";


const CardHeading = ({heading, showTotal}) => {
  return (
    <Flex justify="space-between" align="center">
      <Heading as="h4" size="md" py="2rem">
        {heading}
      </Heading>
      <Text>Show {`(${showTotal})`}</Text>
    </Flex>
  );
};

export default CardHeading;