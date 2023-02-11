import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Icon,
  SystemStyleObject,
  Text,
  theme,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Sidebar from './Sidebar';
import { MdAccountCircle } from 'react-icons/md';

const Header = () => {
  const labels: { [path: string]: string } = {
    '/': 'Home',
    '/marketplace': 'Marketplace',
    '/wallets': 'Wallets',
    '/vouchers': 'Voucher List',
  };

  const location = useLocation();
  const navigate = useNavigate();
  const btnRef = useRef(null);
  const [display, setDisplay] = useState<'flex' | 'none'>('flex');
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (['/login', '/register'].includes(location.pathname)) setDisplay('none');
    else setDisplay('flex');
  }, [location]);

  return (
    <>
      <Box sx={{ ...styles.container, display: display }}>
        <Button
          colorScheme='none'
          sx={styles.sidebarButton}
          _hover={{ ...styles.sidebarButton, boxShadow: '3px 3px 5px green.300'}}
          ref={btnRef}
          onClick={onOpen}
        >
          <HamburgerIcon color='white' />
        </Button>
        <Text sx={styles.label}>{labels[location.pathname]}</Text>
        <Button colorScheme='none'>
          <Icon as={MdAccountCircle} 
            sx={styles.accountButton} 
            _hover={{ ...styles.accountButton, color: 'green.300'}}
            // onClick={() => navigate('/vouchers')}
          />
        </Button>
      </Box>
      <Sidebar isOpen={isOpen} onClose={onClose} navigate={navigate} />
    </>
  );
};

const styles: { [styleName: string]: SystemStyleObject } = {
  container: {
    paddingInline: '1rem',
    height: '10vh',
    minHeight: '3.5rem',
    // backgroundColor: theme.colors.orange[500],
    // bgGradient: 'linear(to-b, Sliver 5%, transparent)',
    // marginBottom: '0.7rem',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sidebarButton: {
    width: '2rem',
    height: '2.5rem',
    border: '2px solid white',
    marginLeft: '1rem',
    borderRadius: '50%',
  },
  accountButton: {
    width: 'calc(2.5rem + 2px)',
    height: 'calc(2.5rem + 2px)',
  },
  label: {
    fontSize: '2xl',
    fontWeight: '700',
    color: 'white',
    textShadow: '0.1rem 0.1rem gray'
  },
};
export default Header;
