import React from 'react';
import { NavigateFunction } from 'react-router';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { Button } from '@chakra-ui/button';
import { Divider, Flex, Box } from '@chakra-ui/layout';
import { SystemStyleObject } from '@chakra-ui/styled-system';

const Sidebar = (props: {
  isOpen: boolean;
  onClose: () => void;
  navigate: NavigateFunction;
}) => {
  return (
    <Drawer isOpen={props.isOpen} placement='left' onClose={props.onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Maet Latex OCR</DrawerHeader>
        <DrawerBody>
          <Flex flexDirection='column'>
            <Button
              variant='ghost'
              colorScheme='green'
              onClick={() => {
                props.navigate('/');
                props.onClose();
              }}
              sx={styles.button}
            >
              Home
            </Button>
            <Divider />
            {/* <Button
              variant='ghost'
              onClick={() => {
                props.navigate('/wallets');
                props.onClose();
              }}
              sx={styles.button}
            >
              Wallets
            </Button>
            <Button
              variant='ghost'
              onClick={() => {
                props.navigate('/marketplace');
                props.onClose();
              }}
              sx={styles.button}
            >
              Marketplace
            </Button>
            <Button
              variant='ghost'
              onClick={() => {
                props.navigate('/vouchers');
                props.onClose();
              }}
              sx={styles.button}
            >
              Your vouchers
            </Button> */}
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Box w='100%'>
            <Divider />
            <Button
              variant='outline'
              colorScheme='red'
              onClick={() => {
                props.navigate('/login');
                props.onClose();
              }}
              sx={styles.button}
            >
              Log out
            </Button>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const styles: { [styleName: string]: SystemStyleObject } = {
  button: {
    marginBlock: '0.5rem',
    width: '100%',
  },
};

export default Sidebar;
