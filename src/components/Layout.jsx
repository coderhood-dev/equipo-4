import React from 'react';
import { Flex } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => (
  <Flex direction="column" minH="100vh">
    <Header />
    <Flex flex={1} direction="column" w="full">
      {children}
    </Flex>
    <Footer />
  </Flex>
);

export default Layout;
