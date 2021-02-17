/* eslint-disable no-unused-vars */
import { Box, SimpleGrid, Button, Text } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { useInfiniteQuery } from 'react-query';

import CardItem from './CardItem';
import useIntersectionObserver from '../hooks/useIntersectionObsever';

function SearchResults({ query }) {
  const itemsPerQuery = 50;
  const queryURL = (offset) =>
    `${process.env.REACT_APP_SEARCH_URL + query}&apiKey=${
      process.env.REACT_APP_KEY
    }&number=${itemsPerQuery}&offset=${offset}`;

  const getParams = (lastPage) =>
    lastPage.totalResults - lastPage.offset > itemsPerQuery
      ? lastPage.offset + itemsPerQuery
      : false;

  const {
    isLoading,
    error,
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['foodData', queryURL(0)],
    async ({ pageParam = 0 }) => {
      const response = await fetch(queryURL(pageParam));
      if (response.ok) {
        return response.json();
      }
      throw Error(`code ${response.status}`);
    },
    {
      getNextPageParam: (lastPage) => getParams(lastPage),
    }
  );

  const [ButtonRef, setButtonRef] = useState();

  // Sets the target for useInterceptionObserver
  const observedButton = useCallback((node) => {
    if (node !== null) {
      setButtonRef(node);
    }
  }, []);

  useIntersectionObserver({
    target: ButtonRef,
    onIntersect: useCallback(fetchNextPage, [getParams, fetchNextPage]),
    enabled: hasNextPage,
  });

  function buttonStatus() {
    if (isFetchingNextPage) {
      return <Text>Loading more...</Text>;
    }
    if (hasNextPage) {
      return <Text>Load Newer</Text>;
    }
    return <Text>Nothing more to load</Text>;
  }

  if (isLoading) return 'Loading...';

  if (error) {
    return `An error has occurred: ${error.message}`;
  }
  return (
    <Box>
      <SimpleGrid minChildWidth="320px" spacing="5" alignContent="center">
        {data &&
          data.pages.map((page) =>
            page.results.map((item) => {
              return (
                <CardItem pagesArray={data.pages} item={item} key={item.id} />
              );
            })
          )}
      </SimpleGrid>
      <Button
        ref={observedButton}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        on
      >
        {buttonStatus()}
      </Button>
    </Box>
  );
}

export default SearchResults;
