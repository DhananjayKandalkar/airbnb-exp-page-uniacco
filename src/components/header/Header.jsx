import React from "react";
import { Image, Text, HStack, Box } from "@chakra-ui/react";
import airbnb from "../../assets/airbnb.png";
import { BsGlobe2 } from "react-icons/bs";
import ProfileTag from "./ProfileTag";
import { BsList } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa";

const Header = () => {
  return (
    <Box
      border="1px solid rgb(210, 208, 208)"
      pos={"sticky" || "-webkit-sticky"}
      top="0"
      zIndex="100"
      bgColor="white"
    >
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        px="3rem"
      >
        <Image w={"8rem"} src={airbnb} />
        <HStack spacing="1rem">
          <Text>Become a host</Text>
          <BsGlobe2 />
          <ProfileTag label={<BsList />} />
        </HStack>
      </Box>

      <Box display={{base: "block", md: "none"}} p="2rem">
        <FaAngleLeft />
      </Box>
      
    </Box>
  );
};

export default Header;
