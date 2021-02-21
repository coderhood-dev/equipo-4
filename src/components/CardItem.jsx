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
          background="#b62a07"
          overflow="hidden"
          padding="4"
          maxW="sm"
          height="100%"
          direction="column"
          justifyContent="space-between"
          margin="auto"
          boxShadow="1px 1px 4px 1px black"
        >
          <Image
            src={item.image}
            alt={item.title}
            fit="cover"
            p="0px"
            borderRadius="lg"
            height="100%"
          />

          <Box>
            <Text
              color="white"
              fontSize="lg"
              textAlign="center"
              fontWeight="bold"
              mt="15px"
              p="10px"
              borderTop="1px solid white"
              borderBottom="1px solid white"
              isTruncated
            >
              {item.title}
            </Text>
          </Box>
        </Flex>
      </Link>
    </>
  );
}

export default CardItem;
