import React from 'react';
import Header from './Header';
import SearchFieldCollapse from './SearchFieldCollapse';

const Home = () => {
  return (
    <div>
      <Header pagename="Home" />
      <h1>Home</h1>
      <p> Testing again, and again</p>
      <SearchFieldCollapse />
    </div>
  );
};
export default Home;
