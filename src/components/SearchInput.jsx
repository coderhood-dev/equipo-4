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
import InputElement from './NumberInput';

// 2. Create an array of data
const APIData = [
  {
    type: 'Quick Search',
    URL: 'quick-search API',
  },
  {
    type: 'Advanced Search',
    URL: 'advanced-search API',
  },
];

/* const advSearchProps = [
  { id: 'minCarbs', label: 'Minimum Sodium per serving' },
  { id: 'MaxCarbs', label: 'Max Sodium per serving' },
  { id: 'minFat', label: 'Minimum Fat per serving' },
  { id: 'MaxFat', label: 'Max Fat per serving' },
  { id: 'minProtein', label: 'Minimum Protein per serving' },
  { id: 'MaxProtein', label: 'Max Protein per serving' },
]; */

function SearchInput({ advSearchRanges }) {
  const [quick, advanced] = APIData;
  const [query, setQuery] = useState('');
  const [queryType, setQueryType] = useState(quick);

  const SearchQuery = () => {
    console.log(queryType);
    console.log(query);
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
          {({ isExpanded }) => (
            <>
              <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                <Box flex="1" textAlign="left">
                  Advanced Search
                </Box>
                <AccordionIcon />
                {isExpanded ? setQueryType(advanced) : setQueryType(quick)}
              </AccordionButton>

              <AccordionPanel pb={4}>
                <Box>
                  {advSearchRanges.map(({ id, label }) => (
                    <InputElement key={id} id={id} label={label} />
                  ))}
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default SearchInput;
