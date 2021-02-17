import React from 'react';
import { Text, Image, Box, Flex } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

function CardItem({ item, pagesArray }) {
  const background = useLocation();
  return (
    <>
      <Link
        to={{
          pathname: `/recipes/${item.id}/information?includeNutrition=true`,
          state: {
            modal: true,
            background,
            pagesArray,
            item,
          },
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
        >
          <Image src={item.image} alt={item.title} fit="cover" />
          <Box>
            <Text>{item.title}</Text>
          </Box>
        </Flex>
      </Link>
    </>
  );
}

export default CardItem;
