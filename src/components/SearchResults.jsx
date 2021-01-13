import { Box } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';

import CardList from './CardList';

function SearchResults({ queryURL }) {
  const { isLoading, error, data } = useQuery(
    ['foodData', queryURL],
    async () =>
      fetch(queryURL).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(error.message);
      }),
    { refetchOnWindowFocus: false }
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
