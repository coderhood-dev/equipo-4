import React, { useEffect } from 'react';
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
import { useLocation, useHistory } from 'react-router-dom';
import ItemRecipe from './ItemRecipe';

function ViewRecipe() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const history = useHistory();
  useEffect(onOpen, [onOpen]);

  const { state = {} } = location;
  const { modal } = state;

  function handleClose() {
    onClose();
    history.goBack();
  }

  if (modal) {
    return (
      <>
        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          size="xl"
          scrollBehavior="inside"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <ItemRecipe />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleClose}>
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
      <ItemRecipe />
    </>
  );
}

export default ViewRecipe;
