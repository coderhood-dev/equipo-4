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
import { SearchIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import CheckboxInput from './CheckboxInput';
import RangesInput from './RangesInput';
import RadioInput from './RadioInput';

function SearchFieldCollapse({ userQueryData }) {
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

  function SearchInput(advSearchRanges, advSearchDiets, advSearchIntolerances) {
    const [userQuery, setUserQuery] = useState(
      () =>
        userQueryData || {
          query: '',
          diet: 'any',
        }
    );
    const { isOpen, onToggle, onClose } = useDisclosure();
    const history = useHistory();

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
      const query = queryString.stringify(userQuery, {
        arrayFormat: 'comma',
        skipEmptyString: true,
      });
      onClose();
      history.push(`/search?${query}`, userQuery);
    };

    return (
      <Box>
        <Box>
          <InputGroup size="md">
            <Input
              m="1rem"
              pr="4.5rem"
              fontWeight="bold"
              color="#b62a07"
              _focus={{
                border: '3px solid #b62a07',
                boxShadow: '1px 1px 8px black',
              }}
              placeholder="What do you wanna eat?"
              id="query"
              value={userQuery.query}
              onChange={handleStringChange}
            />

            <InputRightElement m="1rem 2rem 0 0" width="">
              <HStack>
                <IconButton
                  aria-label="Search"
                  icon={<SearchIcon />}
                  onClick={() => SearchQuery()}
                  size="sm"
                  mr="1rem"
                  bg="#b62a07"
                  color="white"
                  _hover={{
                    bg: '#6e1a05',
                  }}
                  _focus={{ border: 'none' }}
                />
                <Button
                  size="sm"
                  onClick={onToggle}
                  bg="#b62a07"
                  color="white"
                  _hover={{
                    bg: '#6e1a05',
                  }}
                  _focus={{ border: 'none' }}
                >
                  {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
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
              fontWeight="bold"
              m="1rem"
              bg="#b62a07"
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
                handleNumberChange={handleStringChange}
              />
            </Box>
          </Collapse>
        </>
      </Box>
    );
  }
  return SearchInput(
    advSearchRangesList,
    advSearchDietsList,
    advSearchIntolerancesList
  );
}

export default SearchFieldCollapse;
