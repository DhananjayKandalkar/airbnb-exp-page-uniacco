import React from "react";
import { Box, Text, Button, Image, Link } from "@chakra-ui/react";



const NewCard = ({ type = "", title = "", link = "", avatar }) => {
  return (
    <Box>
      <Image src={avatar} pos="relative" w="95%" borderRadius="16px" />
      <Box color="white" pos="absolute" top="1rem" left="1rem">
        <Text>{type}</Text>
        <Text fontSize="1.5rem" maxW="13rem">
          {title}
        </Text>
      </Box>
      <Link href={link} >
        <Button
          bgColor="white"
          variant="solid"
          size="sm"
          pos="absolute"
          bottom="1rem"
          left="1rem"
        >
          Show All
        </Button>
      </Link>
    </Box>
  );
};

export default NewCard;
