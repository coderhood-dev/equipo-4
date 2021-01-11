import { React, useEffect, useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useDisclosure,
  Collapse,
  Button,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import queryString from 'query-string';
import CheckboxInput from './CheckboxInput';
import RangesInput from './RangesInput';
import RadioInput from './RadioInput';

function SearchFieldCollapse({ handleConditionalRender }) {
  const APIlist = [
    {
      type: 'Quick Search',
      URL: 'https://api.spoonacular.com/recipes/complexSearch',
      apiKey: '5877b2159f654d72aa4999a11eb3634d',
    },
    {
      type: 'Advanced Search',
      URL: 'https://api.spoonacular.com/recipes/complexSearch',
      apiKey: '5877b2159f654d72aa4999a11eb3634d',
    },
  ];

  const advSearchRangesList = [
    { id: 'minCarbs', label: 'Minimum Carbs per serving' },
    { id: 'MaxCarbs', label: 'Max Carbs per serving' },
    { id: 'minFat', label: 'Minimum Fat per serving' },
    { id: 'MaxFat', label: 'Max Fat per serving' },
    { id: 'minProtein', label: 'Minimum Protein per serving' },
    { id: 'MaxProtein', label: 'Max Protein per serving' },
  ];

  const advSearchDietsList = [
    { id: 'any', label: 'Any' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'ketogenic', label: 'Keto' },
    { id: 'paleo', label: 'Paleo' },
  ];

  const advSearchIntolerancesList = [
    { id: 'nuts', label: 'Nuts' },
    { id: 'gluten', label: 'Gluten' },
    { id: 'dairy', label: 'Dairy' },
  ];

  function SearchInput(
    APIdata,
    advSearchRanges,
    advSearchDiets,
    advSearchIntolerances
  ) {
    const [quick, advanced] = APIdata;
    const [queryType, setQueryType] = useState(quick);
    const [userQuery, setUserQuery] = useState({
      query: '',
    });

    const handleStringChange = (e) => {
      setUserQuery({
        ...userQuery,
        [e.target.id]: e.target.value,
      });
    };

    const handleChange = (e, category) => {
      setUserQuery({
        ...userQuery,
        [category]: e,
      });
    };

    const SearchQuery = () => {
      const queryURL = queryString.stringifyUrl(
        {
          url: queryType.URL,
          query: { ...userQuery, apiKey: queryType.apiKey },
        },
        {
          arrayFormat: 'comma',
          skipEmptyString: true,
        }
      );
      console.log(queryURL);
      handleConditionalRender(queryURL);
    };

    const { isOpen, onToggle } = useDisclosure();

    useEffect(() => {
      if (isOpen) {
        setQueryType(advanced);
      } else {
        setQueryType(quick);
      }
    }, [isOpen]);

    return (
      <Box>
        <Box>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              placeholder={`${queryType.type}`}
              id="query"
              value={userQuery.query}
              onChange={handleStringChange}
            />
            <InputRightElement>
              <IconButton
                aria-label={`${queryType.type}`}
                icon={<SearchIcon />}
                onClick={() => SearchQuery()}
              />
            </InputRightElement>
          </InputGroup>
        </Box>

        <>
          <Button onClick={onToggle}>Advanced Search</Button>
          <Collapse in={isOpen} animateOpacity>
            <Box
              p="40px"
              color="white"
              mt="4"
              bg="teal.500"
              rounded="md"
              shadow="md"
            >
              <RadioInput
                list={advSearchDiets}
                category="Diet"
                handleCheckboxChange={(e) => handleChange(e, 'diet')}
              />

              <CheckboxInput
                list={advSearchIntolerances}
                category="Intolerances"
                handleCheckboxChange={(e) => handleChange(e, 'intolerances')}
                value={userQuery.intolerances}
              />

              <RangesInput
                list={advSearchRanges}
                category="Nutritional Ranges"
                userQuery={userQuery}
                handleStringChange={handleStringChange}
              />
            </Box>
          </Collapse>
        </>
      </Box>
    );
  }
  return SearchInput(
    APIlist,
    advSearchRangesList,
    advSearchDietsList,
    advSearchIntolerancesList
  );
}

export default SearchFieldCollapse;
