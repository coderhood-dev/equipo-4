import { useQuery } from 'react-query';

function SearchItem(item) {
  const queryURL = `https://api.spoonacular.com/recipes/${item.id}/information?apiKey=${process.env.REACT_APP_ADVANCEDSEARCH_KEY}&includeNutrition=true`;
  const { isLoading, error, data } = useQuery(
    ['recipeData', queryURL],
    async () => {
      const response = await fetch(queryURL);
      if (response.ok) {
        return response.json();
      }
      throw Error(`code ${response.status}`);
    },
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return 'Loading...';

  if (error) {
    return `An error has occurred: ${error.message}`;
  }
  return { data };
}

export default SearchItem;
