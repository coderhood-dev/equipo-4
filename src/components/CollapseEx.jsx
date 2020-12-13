import React from 'react';
import { Button, useDisclosure, Collapse, Box } from '@chakra-ui/react';

function CollapseEx() {
  const { isOpen, onToggle } = useDisclosure();

  const handleExpansion = () => {
    if (isOpen) {
      console.log('123');
    } else {
      console.log('asd');
    }
  };

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Collapse in={isOpen} animateOpacity onChange={handleExpansion()}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          {isOpen ? console.log('asd') : console.log('123')}
        </Box>
      </Collapse>
    </>
  );
}

export default CollapseEx;
