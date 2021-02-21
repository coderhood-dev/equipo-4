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
  const { modal, background = {}, pagesArray = [], item = {} } = state;

  const { pathname, search } = background;

  const galleryArray = pagesArray.map((page) => page.results).flat();

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
            <ModalCloseButton
              bg="#b62a07"
              m="20px"
              boxSize="50px"
              border="none"
              color="white"
              boxShadow="1px 1px 10px  black"
              _hover={{ bg: '#6e1a05' }}
            />
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
                      pagesArray,
                      item: prevItem,
                    },
                  }}
                >
                  <Button
                    bg="#b62a07"
                    color="white"
                    _hover={{
                      bg: '#6e1a05',
                      boxShadow: '1px 1px 10px black',
                      transitionDuration: '0.5s',
                    }}
                  >
                    Prev
                  </Button>
                </Link>
              )}
              {nextItem && (
                <Link
                  to={{
                    pathname: `/recipes/${nextItem.id}/information?includeNutrition=true`,
                    state: {
                      modal,
                      background,
                      pagesArray,
                      item: nextItem,
                    },
                  }}
                >
                  <Button
                    bg="#b62a07"
                    color="white"
                    ml={3}
                    _hover={{
                      bg: '#6e1a05',
                      boxShadow: '1px 1px 10px black',
                      transitionDuration: '0.5s',
                    }}
                  >
                    Next
                  </Button>
                </Link>
              )}

              <Button
                bg="#b62a07"
                color="white"
                m={3}
                onClick={handleClose}
                _hover={{
                  bg: '#6e1a05',
                  boxShadow: '1px 1px 10px black',
                  transitionDuration: '0.5s',
                }}
              >
                Close
              </Button>
              <Button
                color="#851f05"
                _hover={{
                  bg: '#6e1a05',
                  color: 'white',
                  boxShadow: '1px 1px 10px black',
                  transitionDuration: '0.5s',
                }}
              >
                Save
              </Button>
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
