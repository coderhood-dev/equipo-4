import React from 'react';

import { useQuery } from 'react-query';

function SearchResults({ queryURL }) {
  const { isLoading, error, data, isFetching } = useQuery('foodData', () =>
    fetch(queryURL).then((res) => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div>
      <ul>
        {data.results.map((element) => (
          <li key={element.id}>{element.title}</li>
        ))}
      </ul>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  );
}

export default SearchResults;
