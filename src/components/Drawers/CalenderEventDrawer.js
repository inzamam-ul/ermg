import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';

import { useDrawer } from '../../providers';

export const CalenderEventDrawer = ({ props }) => {
  const { onCloseDrawer } = useDrawer();

  return (
    <Drawer isOpen placement="right" onClose={onCloseDrawer}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{props.title}</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Text>
                <Text as="span" fontWeight="bold">
                  Start:{' '}
                </Text>
              </Text>
              <Text>
                <Text as="span" fontWeight="bold">
                  End:{' '}
                </Text>
              </Text>
              <Text>
                <Text as="span" fontWeight="bold">
                  Completion Percentage:{' '}
                </Text>
                <Text as="span">{props.resource.percentage}%</Text>
              </Text>
              <Text>
                <Text as="span" fontWeight="bold">
                  State:{' '}
                </Text>
                <Text as="span">{props.resource.state}</Text>
              </Text>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onCloseDrawer}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
