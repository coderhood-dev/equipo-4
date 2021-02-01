import React from 'react';
import { useLocation } from 'react-router-dom';

import SearchFieldCollapse from './SearchFieldCollapse';
import SearchResults from './SearchResults';

const SearchResultsPage = () => {
  const location = useLocation();
  const { search } = location;

  return (
    <div>
      <SearchFieldCollapse />
      <SearchResults query={search} />
    </div>
  );
};

export default SearchResultsPage;
