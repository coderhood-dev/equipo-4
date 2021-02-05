import { Box } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';

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

  if (isLoading) return 'Loading...';

  if (error) {
    return `An error has occurred: ${error.message}`;
  }
  return (
    <Box>
      <CardList items={data.results} />
    </Box>
  );
}

export default SearchResults;
