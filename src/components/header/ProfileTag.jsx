import React from "react";
import { Tag, Avatar, Box, TagLabel } from "@chakra-ui/react";
import user_default from "../../assets/user-default.png";


const ProfileTag = ({ src = user_default, label = "user", user = "user" }) => {
  return (
    <Box>
      <Tag size="lg" colorScheme="gray" borderRadius="full" px="0.8rem">
        <TagLabel>{label}</TagLabel>
        <Avatar src={src} size="xs" name={user} />
      </Tag>
    </Box>
  );
};

export default ProfileTag;
