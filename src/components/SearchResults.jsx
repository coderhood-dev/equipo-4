import { Box } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';

import CardList from './CardList';

function SearchResults({ queryURL }) {
  const { isLoading, error, data } = useQuery(
    ['foodData', queryURL],
    async () => {
      try {
        const response = await fetch(queryURL);
        if (response.ok) {
          return response.json();
        }
        throw Error({ status: response.status, message: response.statusText });
      } catch (e) {
        console.log('ERROR', { e });
        throw Error(e);
      }
    },
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return 'Loading...';

  if (error) {
    console.log(error);
    return `An error has occurred: ${error}`;
  }
  return (
    <Box>
      <CardList items={data.results} />
    </Box>
  );
}

export default SearchResults;
