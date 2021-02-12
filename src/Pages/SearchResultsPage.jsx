import React from 'react';
import { useLocation } from 'react-router-dom';

import SearchFieldCollapse from '../components/SearchFieldCollapse';
import SearchResults from '../components/SearchResults';

const SearchResultsPage = () => {
  const location = useLocation();
  const { search, state } = location;

  return (
    <div>
      <SearchFieldCollapse userQueryData={state} />
      <SearchResults query={search} />
    </div>
  );
};

export default SearchResultsPage;
