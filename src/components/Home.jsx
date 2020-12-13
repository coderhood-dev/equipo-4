import React from 'react';
import Header from './Header';
import SearchInput from './SearchInput';

const Home = () => {
  /* const tabData = [
    {
      type: 'Quick Search',
      URL: 'quick-search API',
    },
    {
      type: 'Advanced Search',
      URL: 'advanced-search API',
    },
  ]; */
  const advSearchRangeProps = [
    { id: 'minCarbs', label: 'Minimum Carbs per serving' },
    { id: 'MaxCarbs', label: 'Max Carbs per serving' },
    { id: 'minFat', label: 'Minimum Fat per serving' },
    { id: 'MaxFat', label: 'Max Fat per serving' },
    { id: 'minProtein', label: 'Minimum Protein per serving' },
    { id: 'MaxProtein', label: 'Max Protein per serving' },
  ];

  return (
    <div>
      <Header pagename="Home" />
      <h1>Home</h1>
      <p> Testing again, and again</p>
      <SearchInput advSearchRanges={advSearchRangeProps} />
    </div>
  );
};
export default Home;
