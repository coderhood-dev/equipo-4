import { React, useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useDisclosure,
  Collapse,
  Button,
  HStack,
} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import queryString from 'query-string';
import CheckboxInput from './CheckboxInput';
import RangesInput from './RangesInput';
import RadioInput from './RadioInput';

function SearchFieldCollapse({ handleConditionalRender }) {
  const APIlist = {
    type: 'Quick Search',
    URL: 'https://api.spoonacular.com/recipes/complexSearch',
    apiKey: process.env.REACT_APP_QUICKSEARCH_KEY,
  };

  const advSearchRangesList = [
    { id: 'minCarbs', label: 'Minimum Carbs per serving' },
    { id: 'maxCarbs', label: 'Maximum Carbs per serving' },
    { id: 'minFat', label: 'Minimum Fat per serving' },
    { id: 'maxFat', label: 'Maximum Fat per serving' },
    { id: 'minProtein', label: 'Minimum Protein per serving' },
    { id: 'maxProtein', label: 'Maximum Protein per serving' },
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
    const [userQuery, setUserQuery] = useState({
      query: '',
      diet: 'any',
    });
    const { isOpen, onToggle, onClose } = useDisclosure();

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
          url: APIdata.URL,
          query: { ...userQuery, apiKey: APIdata.apiKey },
        },
        {
          arrayFormat: 'comma',
          skipEmptyString: true,
        }
      );
      handleConditionalRender(queryURL);
      onClose();
    };

    return (
      <Box>
        <Box>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              placeholder="What do you wanna eat?"
              id="query"
              value={userQuery.query}
              onChange={handleStringChange}
            />
            <InputRightElement width="0. rem">
              <HStack>
                <IconButton
                  aria-label="Search"
                  icon={<SearchIcon />}
                  onClick={() => SearchQuery()}
                  size="sm"
                />
                <Button size="sm" onClick={onToggle}>
                  <ChevronDownIcon />
                </Button>
              </HStack>
            </InputRightElement>
          </InputGroup>
        </Box>

        <>
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
                value={userQuery.diet}
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
