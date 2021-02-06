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
  Flex,
} from '@chakra-ui/react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import ItemRecipe from './ItemRecipe';

function ViewRecipe() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  console.log('location', location);
  const history = useHistory();
  useEffect(onOpen, [onOpen]);

  const { state = {} } = location;
  const { modal, background = {}, neighbors = {} } = state;
  const { pathname, search } = background;
  const { prevItem, nextItem } = neighbors;
  console.log('neighbors', neighbors);

  function handleClose() {
    onClose();
    history.push(`${pathname + search}`);
  }

  if (modal) {
    return (
      <Flex>
        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          size="6xl"
          scrollBehavior="inside"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <ItemRecipe />
            </ModalBody>
            <ModalFooter>
              {prevItem && (
                <Link
                  to={{
                    pathname: `/recipes/${prevItem.id}/information?includeNutrition=true`,
                    state: { modal, background },
                  }}
                >
                  <Button>Prev</Button>
                </Link>
              )}
              {nextItem && (
                <Link
                  to={{
                    pathname: `/recipes/${nextItem.id}/information?includeNutrition=true`,
                    state: { modal, background },
                  }}
                >
                  <Button>Next</Button>
                </Link>
              )}

              <Button colorScheme="blue" mr={3} onClick={handleClose}>
                Close
              </Button>
              <Button>Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    );
  }
  return (
    <>
      <ItemRecipe />
    </>
  );
}

export default ViewRecipe;
