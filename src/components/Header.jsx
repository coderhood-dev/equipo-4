import React from 'react';
import { Link } from 'react-router-dom';

import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Header = ({ pagename }) => (
  <Flex
    bg="#b62a07"
    color="white"
    h="4rem"
    pl="4rem"
    pr="4rem"
    w="100%"
    justify="flex-start"
    alignItems="center"
  >
    <Heading as="h1">{pagename}</Heading>
    <Menu>
      <Flex>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          color="#ffffff"
          _hover={{ bg: '#6e1a05' }}
          _expanded={{ bg: '#b62a07' }}
          variant="ghost"
          w="6rem"
          _focus={{ border: 'none' }}
          borderRadius="8px"
          size="lg"
        >
          Menu
        </MenuButton>
        <MenuList bg="#b62a07" _expanded={{ bg: '##b62a07' }}>
          <Link to="/" _hover={{ bg: '#6e1a05' }} _focus={{ border: 'none,' }}>
            <MenuItem _hover={{ bg: '#6e1a05' }} _focus={{ border: 'none,' }}>
              Home
            </MenuItem>
          </Link>
          <Link to="/about">
            <MenuItem _hover={{ bg: '#6e1a05' }}>About</MenuItem>
          </Link>
          <Link to="/profile">
            <MenuItem _hover={{ bg: '#6e1a05' }}>Profile</MenuItem>
          </Link>
        </MenuList>
      </Flex>
    </Menu>
  </Flex>
);

export default Header;
