import { Text, Image, Link, Heading, Flex } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import DOMPurify from 'dompurify';
import { useLocation } from 'react-router-dom';
import NutritionalTable from './NutritionalTable';

function ItemRecipe() {
  const location = useLocation();

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
    }
  );

  if (isLoading) return 'Loading...';

  if (error) {
    return `An error has occurred: ${error.message}`;
  }
  return (
    <>
      <Heading
        textAlign="center"
        color="#b62a07"
        m="10px 0px 30px 0px"
        borderBottom="2px solid #b62a07"
        borderTop="2px solid #b62a07"
      >
        {data.title}
      </Heading>
      <Flex alignItems="center" justifyContent="center">
        <Image
          borderRadius="20px"
          boxShadow="1px 1px 8px 1px black"
          m="10px"
          src={data.image}
          alt={data.title}
          fit="cover"
        />
      </Flex>
      <Heading
        mb={4}
        textAlign="center"
        color="#b62a07"
        m="10px 0px 30px 0px"
        borderBottom="2px solid #b62a07"
        borderTop="2px solid #b62a07"
      >
        Summary
      </Heading>
      <Text
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data.summary),
        }}
      />
      <Heading
        mb={4}
        textAlign="center"
        color="#b62a07"
        m="10px 0px 30px 0px"
        borderBottom="2px solid #b62a07"
        borderTop="2px solid #b62a07"
      >
        Instructions
      </Heading>
      {data.instructions ? (
        <Text
          ml={4}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.instructions),
          }}
        />
      ) : (
        <Text>
          Read the detailed instructions on{' '}
          <Link href={`${data.sourceUrl}`}>{`${data.sourceName}`}</Link>
        </Text>
      )}
      <NutritionalTable data={data} />
    </>
  );
}

export default ItemRecipe;
