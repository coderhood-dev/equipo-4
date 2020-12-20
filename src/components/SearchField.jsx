import { React, useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import CheckboxInput from './CheckboxInput';
import RangesInput from './RangesInput';

// 2. Create an array of data

function SearchField() {
  const APIlist = [
    {
      type: 'Quick Search',
      URL: 'quick-search API',
    },
    {
      type: 'Advanced Search',
      URL: 'advanced-search API',
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
    const [query, setQuery] = useState('');
    // const [queryType, setQueryType] = useState(quick);
    const queryType = quick;

    const SearchQuery = () => {
      console.log(queryType);
      console.log(query);
      console.log(advanced);
    };

    const handleChange = (e) => {
      setQuery(e.target.value);
    };

    return (
      <Box>
        <Box>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              placeholder={`${queryType.type}`}
              id={`searchBy${queryType.type}`}
              value={query}
              onChange={handleChange}
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

        <Accordion allowToggle>
          <AccordionItem>
            <>
              <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                <Box flex="1" textAlign="left">
                  Advanced Search
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <CheckboxInput list={advSearchDiets} category="Diets" />

                <CheckboxInput
                  list={advSearchIntolerances}
                  category="Intolerances"
                />

                <RangesInput
                  list={advSearchRanges}
                  category="Nutritional Ranges"
                />
              </AccordionPanel>
            </>
          </AccordionItem>
        </Accordion>
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

export default SearchField;
