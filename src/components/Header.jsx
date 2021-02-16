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

const Header = ({ pagename }) => (
  <Flex
    bg="#b62a07"
    color="white"
    h="4rem"
    pl="4rem"
    pr="4rem"
    w="100%"
    justify="space-between"
    alignItems="center"
  >
    <Heading as="h1">{pagename}</Heading>
    <Menu>
      <Flex ml="2rem">
        <MenuButton
          as={Button}
          color="#ffffff"
          _hover={{ bg: '#6e1a05' }}
          _expanded={{ bg: '#b62a07' }}
          variant="ghost"
          w="2rem"
          borderRadius="8px"
          size="lg"
        >
          Menu
        </MenuButton>
        <MenuList bg="#b62a07" _expanded={{ bg: '##b62a07' }}>
          <Link to="/" _hover={{ bg: '#6e1a05' }}>
            <MenuItem _hover={{ bg: '#6e1a05' }}>Home</MenuItem>
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
