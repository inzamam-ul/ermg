import React from "react";
import {
  Box,
  Image,
  IconButton,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";

import { RemoveImagePopover } from ".";

export const PreviewImage = ({ onClick, src }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box position="relative" mr={4} mb={4}>
      <Tooltip aria-label="Remove image" label="Remove image" placement="top">
        <RemoveImagePopover
          handleDeleteImage={onClick}
          onClose={onClose}
          isOpen={isOpen}
        >
          <IconButton
            size="xs"
            onClick={onOpen}
            aria-label="Remove image"
            position="absolute"
            colorScheme="red"
            zIndex={1}
            icon={<AiOutlineDelete />}
          />
        </RemoveImagePopover>
      </Tooltip>
      <Image src={src} objectFit="cover" rounded="md" boxSize="150px" />
    </Box>
  );
};
