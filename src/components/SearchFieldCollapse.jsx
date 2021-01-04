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
import CheckboxInput from './CheckboxInput';
import RangesInput from './RangesInput';
import RadioInput from './RadioInput';

function SearchFieldCollapse() {
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
    const [userQuery, setUserQuery] = useState({
      queryType: quick,
      query: '',
    });

    const handleStringChange = (e) => {
      setUserQuery({
        ...userQuery,
        [e.target.id]: e.target.value,
      });
      // TODO: setQuery(destructure query object, add e.target.id: e.target.value)
      // onChange call handleChange for each advanced field
    };

    // const handleCheckboxChange = (e) => {
    //   setUserQuery({
    //     ...userQuery,
    //     intolerances: e,
    //   });
    // };

    const handleChange = (e, category) => {
      setUserQuery({
        ...userQuery,
        [category]: e,
      });
    };

    const SearchQuery = () => {
      // console.log(queryType);
      console.log(userQuery);
      // TODO: parse user inputs and API URL into an object, then use .stringifyUrl (query-string library)
      // on said object to obtain our search URL to be fed to spoonacular API (react-query)
      //
    };

    const { isOpen, onToggle } = useDisclosure();

    useEffect(() => {
      if (isOpen) {
        setUserQuery({ ...userQuery, queryType: advanced });
      } else {
        setUserQuery({ ...userQuery, queryType: quick });
      }
    }, [isOpen]);

    return (
      <Box>
        <Box>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              placeholder={`${userQuery.queryType.type}`}
              id="query"
              value={userQuery.query}
              onChange={handleStringChange}
            />
            <InputRightElement>
              <IconButton
                aria-label={`${userQuery.queryType.type}`}
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
                category="Diets"
                handleCheckboxChange={(e) => handleChange(e, 'diets')}
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
