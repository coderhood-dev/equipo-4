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
  ModalBody,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ItemRecipe from './ItemRecipe';

function CardItem({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Link
        to={{
          pathname: `/recipes/${item.id}/information?includeNutrition=true`,
          state: { modal: true },
        }}
      >
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
      </Link>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ItemRecipe item={item} />
          </ModalBody>
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
