import React from 'react';
import { useLocation } from 'react-router-dom';

import SearchFieldCollapse from './SearchFieldCollapse';
import SearchResults from './SearchResults';

const SearchResultsPage = () => {
  const location = useLocation();
  const query = location.search;

  return (
    <div>
      <SearchFieldCollapse />
      <SearchResults query={query} />
    </div>
  );
};

export default SearchResultsPage;
