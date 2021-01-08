import React, { useState } from 'react';
import Header from './Header';
import SearchFieldCollapse from './SearchFieldCollapse';
import SearchResults from './SearchResults';

const Home = () => {
  const [didUserSearch, setDidUserSearch] = useState(false);
  const [queryURL, setQueryURL] = useState('');
  const handleConditionalRender = (URL) => {
    setDidUserSearch(true);
    setQueryURL(URL);
  };
  return (
    <div>
      <Header pagename="Home" />
      <h1>Home</h1>
      <p> Testing again, and again</p>
      <SearchFieldCollapse handleConditionalRender={handleConditionalRender} />
      {didUserSearch ? <SearchResults queryURL={queryURL} /> : <div />}
    </div>
  );
};

export default Home;
