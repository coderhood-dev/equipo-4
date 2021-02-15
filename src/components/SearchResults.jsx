import React from 'react';
import { Box, SimpleGrid, Button, Text, Flex, Spinner } from '@chakra-ui/react';
import { useInfiniteQuery } from 'react-query';

import CardItem from './CardItem';

function SearchResults({ query }) {
  const itemsPerQuery = 50;
  const queryURL = `${process.env.REACT_APP_SEARCH_URL + query}&apiKey=${
    process.env.REACT_APP_KEY
  }&number=${itemsPerQuery}&offset=`;

  const loadMoreButtonRef = React.useRef();

  const getParams = (lastPage) => {
    console.log(
      parseInt(lastPage.totalResults, 10) - parseInt(lastPage.offset, 10)
    );
    if (
      parseInt(lastPage.totalResults, 10) - parseInt(lastPage.offset, 10) >
      parseInt(itemsPerQuery, 10)
    ) {
      return parseInt(lastPage.offset, 10) + parseInt(itemsPerQuery, 10);
    }
    return false;
  };
  const {
    isLoading,
    error,
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['foodData', queryURL],
    async ({ pageParam = 0 }) => {
      const response = await fetch(queryURL + pageParam);
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
      getNextPageParam: (lastPage) => getParams(lastPage),
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
          {`An error has occurred: ${error.message}`}
        </Text>
      </Flex>
    );
  }
  return (
    <Box>
      <SimpleGrid minChildWidth="320px" spacing="5" alignContent="center">
        {data &&
          data.pages.map((page) =>
            page.results.map((item) => {
              return (
                <CardItem
                  galleryArray={page.results}
                  item={item}
                  key={item.id}
                />
              );
            })
          )}
      </SimpleGrid>
      <Button
        ref={loadMoreButtonRef}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {
          // eslint-disable-next-line no-nested-ternary
          isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load Newer'
            : 'Nothing more to load'
        }
      </Button>
    </Box>
  );
}

export default SearchResults;
