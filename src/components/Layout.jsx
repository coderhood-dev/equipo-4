import { Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";

const Layout = ({ children }) => (
  <Flex direction="column" minH="100vh">
    <Flex flex={1} direction="column" w="full">
      {children}
    </Flex>
    <Footer />
  </Flex>
);

export default Layout;