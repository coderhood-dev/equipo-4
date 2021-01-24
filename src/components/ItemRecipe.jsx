import { Box, ModalHeader, ModalBody, Image } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';

function ItemRecipe({ item }) {
  const queryURL = `https://api.spoonacular.com/recipes/${item.id}/information?apiKey=${process.env.REACT_APP_ADVANCEDSEARCH_KEY}`;
  const { isLoading, error, data } = useQuery(
    ['recipeData', queryURL],
    async () => {
      const response = await fetch(queryURL);
      if (response.ok) {
        return response.json();
      }
      throw Error(`code ${response.status}`);
    },
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return 'Loading...';

  if (error) {
    return `An error has occurred: ${error.message}`;
  }
  return (
    <Box>
      <ModalHeader>{data.title}</ModalHeader>
      <ModalBody>
        <Image src={data.image} alt={data.title} fit="cover" />
      </ModalBody>
    </Box>
  );
}

export default ItemRecipe;
