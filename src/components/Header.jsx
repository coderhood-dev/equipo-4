import React from 'react';
import {
  Link
} from "react-router-dom";

import {
  Flex, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Button,
    

} from '@chakra-ui/react'


const Header = (props) => (
<Flex 
  bg="#065666"
  color="#C4F1F9"
  h="4rem"
  pl="4rem"
  pr="4rem"
  w="100%"  
  justify="space-between"
  alignItems="center"
  >
  <Heading as="h1" >{props.pagename}</Heading>
  <Menu>
    <Flex ml="2rem">
        <MenuButton  
        as={Button}
        color="#C4F1F9"
        _hover={{bg:"#0987A0"}}
        _expanded={{ bg: "#0987A0" }}
        variant="ghost"
        w="2rem"
        borderRadius="8px"
        size="lg"

        >
        Menu
        
        </MenuButton>
        <MenuList 
        bg="#065666"
        _expanded={{ bg: "#0987A0" }}
        >
          <MenuItem _hover={{ bg: "#0987A0" }}>
            <Link  to="/">Home</Link>
          </MenuItem>
          <MenuItem _hover={{ bg: "#0987A0" }}>
            <Link to="/about">About</Link>
          </MenuItem>
          <MenuItem _hover={{ bg: "#0987A0" }}>
            <Link to="/profile">Profile</Link>
          </MenuItem>
        </MenuList>
    </Flex>    
  </Menu>
</Flex>
);


export default Header;