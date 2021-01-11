import { Box } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';

import CardList from './CardList';

function SearchResults({ queryURL }) {
  const { isLoading, error, data, isFetching } = useQuery(
    ['foodData', queryURL],
    () => fetch(queryURL).then((res) => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <Box>
      <CardList items={data.results} />
      <Box>{isFetching ? 'Updating...' : ''}</Box>
    </Box>
  );
}

export default SearchResults;
