import React from 'react';
import { useQuery } from 'react-query';
import { Text, Flex, Box, Spinner } from '@chakra-ui/react';

import CardList from './CardList';

function SearchResults({ query }) {
  const queryURL = `${process.env.REACT_APP_SEARCH_URL + query}&apiKey=${
    process.env.REACT_APP_KEY
  }`;

  const { isLoading, error, data } = useQuery(
    ['foodData', queryURL],
    async () => {
      const response = await fetch(queryURL);
      if (response.ok) {
        return response.json();
      }
      throw Error(`code ${response.status}`);
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 3600000,
      cacheTime: 3600000,
    }
  );

  if (isLoading)
    return (
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Text
          mt="25px"
          mb="25px"
          color="#b62a07"
          fontSize="30px"
          fontWeight="bold"
        >
          Loading...
        </Text>
        <Spinner color="#b62a07" size="xl" />
      </Flex>
    );

  if (error) {
    return (
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Text
          color="#0c0c0b"
          fontSize="30px"
          fontWeight="bold"
          mt="25px"
          p="10px"
          bg="#ffee00"
          borderRadius="10px"
          border="3px solid black"
        >
          An error has occurred: {error.message}
        </Text>
      </Flex>
    );
  }
  return (
    <Box>
      <CardList items={data.results} />
    </Box>
  );
}

export default SearchResults;
