import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

import Header from './Header';
import SearchFieldCollapse from './SearchFieldCollapse';
import SearchResults from './SearchResults';

const Home = () => {
  // const [didUserSearch, setDidUserSearch] = useState(false);
  const [queryURL, setQueryURL] = useState('');
  const handleConditionalRender = (URL) => {
    // setDidUserSearch(true);
    setQueryURL(URL);
  };

  return (
    <div>
      <Header pagename="Home" />
      <SearchFieldCollapse handleConditionalRender={handleConditionalRender} />
      {queryURL !== '' ? (
        <SearchResults queryURL={queryURL} />
      ) : (
        <Box>Putoelquelee</Box>
      )}
    </div>
  );
};

export default Home;
