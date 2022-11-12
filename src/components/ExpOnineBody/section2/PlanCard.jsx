import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

// airbnb section 2 plan card

const PlanCard = ({
  imageUrl,
  imageAlt,
  title,
  price,
  rating,
  reviewCount,
  country,
}) => {
  return (
    <Box overflow="hidden">
      <Image src={imageUrl} boxSize='15rem' alt={imageAlt} borderRadius="16px" />
      <Box py="0.6rem">
        <Box
          display="flex"
          alignItems="baseline"
          gap="0.3rem"
          fontSize="0.8rem"
        >
          <Text><FaStar /></Text>
          <Text>{rating}</Text>
          <Text color="grey">{`(${reviewCount})`}</Text>
          <Text>•</Text>
          <Text color="grey" noOfLines={1}>{country}</Text>
        </Box>
        <Box mt="1" noOfLines={2}>{title}</Box>
        <Box mt="1">
          <Text>
            <b>From ₹{price}</b>/person
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PlanCard;