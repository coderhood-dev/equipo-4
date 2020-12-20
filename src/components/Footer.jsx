import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Footer = () => (
  <Flex
    w="full"
    bg="#c7eaf1"
    color="#065666"
    direction="row"
    px="10rem"
    py="2rem"
    justify="space-around"
  >
    <Text mr="1rem">@contact1</Text>
    <Text mr="1rem">@contact2</Text>
    <Text mr="1rem">@contact3</Text>
  </Flex>
);

export default Footer;
