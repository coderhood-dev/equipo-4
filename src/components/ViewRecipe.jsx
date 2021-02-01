import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Button,
  ModalBody,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import ItemRecipe from './ItemRecipe';

function ViewRecipe() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const { state = {} } = location;
  const { modal } = state;

  if (modal) {
    return (
      <>
        <Button onClick={onOpen}>Open</Button>
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
              <ItemRecipe />
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  onClose();
                }}
              >
                Close
              </Button>
              <Button>Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  return (
    <>
      <p>No Modal</p>
      <ItemRecipe />
    </>
  );
}

export default ViewRecipe;
