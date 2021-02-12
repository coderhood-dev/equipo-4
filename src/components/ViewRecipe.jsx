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

  const history = useHistory();
  useEffect(onOpen, [onOpen]);

  const { state = {} } = location;
  const { modal, background = {}, galleryArray = [], item = {} } = state;

  const { pathname, search } = background;

  const currentItemIndex = galleryArray.indexOf(item);
  const maxIndex = galleryArray.length - 1;

  const neighbors = {
    prevItem:
      currentItemIndex > 0 ? galleryArray[currentItemIndex - 1] : undefined,
    nextItem:
      currentItemIndex < maxIndex
        ? galleryArray[currentItemIndex + 1]
        : undefined,
  };

  const { prevItem, nextItem } = neighbors;

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
                    state: {
                      modal,
                      background,
                      galleryArray,
                      item: prevItem,
                    },
                  }}
                >
                  <Button>Prev</Button>
                </Link>
              )}
              {nextItem && (
                <Link
                  to={{
                    pathname: `/recipes/${nextItem.id}/information?includeNutrition=true`,
                    state: {
                      modal,
                      background,
                      galleryArray,
                      item: nextItem,
                    },
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
