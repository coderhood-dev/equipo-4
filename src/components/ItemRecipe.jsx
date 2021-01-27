import {
  Text,
  ModalHeader,
  ModalBody,
  Image,
  Link,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import DOMPurify from 'dompurify';
import NutritionalTable from './NutritionalTable';

function ItemRecipe({ item }) {
  const queryURL = `https://api.spoonacular.com/recipes/${item.id}/information?apiKey=${process.env.REACT_APP_ADVANCEDSEARCH_KEY}&includeNutrition=true`;
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
    <>
      <ModalHeader>{data.title}</ModalHeader>
      <ModalBody>
        <Image src={data.image} alt={data.title} fit="cover" />
        <Heading mb={4}>Summary</Heading>
        <Text
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.summary) }}
        />
        <Heading mb={4}>Instructions</Heading>
        {data.instructions ? (
          <Text
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.instructions),
            }}
          />
        ) : (
          <Text>
            Read the detailed instructions on
            <Link href={`${data.sourceUrl}`}>{`${data.sourceName}`}</Link>
          </Text>
        )}
        <NutritionalTable data={data} />
      </ModalBody>
    </>
  );
}

export default ItemRecipe;
