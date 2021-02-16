import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Footer = () => (
  <Flex
    w="full"
    bg="#b62a07"
    color="#f8f1f1"
    fontWeight="bold"
    direction="row"
    mt="2rem"
    px="10rem"
    py="2rem"
    justify="space-around"
  >
    <Text
      mr="1rem"
      borderBottom="1px solid white"
      borderTop="1px solid white"
      p="5px"
    >
      @SanGuchito
    </Text>
  </Flex>
);

export default Footer;
