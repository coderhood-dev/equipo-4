import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Image,
  Box,
  Flex,
} from '@chakra-ui/react';
import ItemRecipe from './ItemRecipe';

function CardItem({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        id={item.id}
        borderRadius="lg"
        background="gray.200"
        overflow="hidden"
        padding="5"
        maxW="sm"
        direction="column"
        margin="auto"
        onClick={onOpen}
      >
        <Image src={item.image} alt={item.title} fit="cover" />
        <Box>
          <Text>{item.title}</Text>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Box>
            <ItemRecipe item={item} />
          </Box>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CardItem;
