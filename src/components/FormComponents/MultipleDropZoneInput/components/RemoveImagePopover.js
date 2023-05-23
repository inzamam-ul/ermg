import React from "react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";

export const RemoveImagePopover = ({
  handleDeleteImage,
  children,
  onClose,
  isOpen,
}) => (
  <Popover isOpen={isOpen} onClose={onClose}>
    <PopoverTrigger>{children}</PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>Are you sure?</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
        <Button
          isFullWidth
          colorScheme="red"
          onClick={() => {
            onClose();
            handleDeleteImage();
          }}
        >
          Yes
        </Button>
        <Button isFullWidth mt={3} onClick={onClose}>
          Cancel
        </Button>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);
