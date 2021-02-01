import { Text, Image, Link, Heading } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import DOMPurify from 'dompurify';
import { useLocation } from 'react-router-dom';
import NutritionalTable from './NutritionalTable';

function ItemRecipe() {
  const location = useLocation();
  console.log(location);

  const queryURL = `${
    process.env.REACT_APP_API_URL + location.pathname + location.search
  }&apiKey=${process.env.REACT_APP_KEY}`;

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
      <Heading>{data.title}</Heading>

      <Image src={data.image} alt={data.title} fit="cover" />
      <Heading mb={4}>Summary</Heading>
      <Text
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data.summary),
        }}
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
    </>
  );
}

export default ItemRecipe;
