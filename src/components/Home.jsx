import React, { useState } from 'react';

import Header from './Header';
import SearchFieldCollapse from './SearchFieldCollapse';
import SearchResults from './SearchResults';
import HomeScreen from './HomeScreen';

const Home = () => {
  const [queryURL, setQueryURL] = useState('');
  const handleConditionalRender = (URL) => {
    setQueryURL(URL);
  };

  return (
    <div>
      <Header pagename="Home" />
      <SearchFieldCollapse handleConditionalRender={handleConditionalRender} />
      {queryURL !== '' ? <SearchResults queryURL={queryURL} /> : <HomeScreen />}
    </div>
  );
};

export default Home;
