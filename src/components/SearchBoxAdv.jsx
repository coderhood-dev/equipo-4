import { React, useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

// 2. Create an array of data
const tabData = [
  {
    type: 'Quick Search',
    URL: 'quick-search API',
  },
  {
    label: 'Advanced Search',
    URL: 'advanced-search API',
  },
];

function SearchBox() {
  const [query, setQuery] = useState(null);
  const [queryType, setqueryType] = useState(tabData[0]);
  const [value, setValue] = useState(tabData[0].label);

  const SearchQuery = () => {
    console.log(queryType);
    console.log(query);
  };

  const handleChange = (dataPair) => {
    setqueryType(dataPair);
  };
  const SearchBoxQuery = (searchPair) => {
    console.log(`${query} ${searchPair.label} in ${searchPair.URL}`);
  };

  function toDelete() {
    setValue('1234');
    console.log(value);
    handleChange({ value, queryType });
  }
  toDelete();

  // 1. Create the component
  function SearchTabs({ data }) {
    return (
      <Box>
        <Box>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              placeholder={`Search by ${queryType.label}`}
              id={`searchBy${queryType.label}`}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <InputRightElement>
              <IconButton
                aria-label={`Search by ${queryType.label}`}
                icon={<SearchIcon />}
                onClick={() => SearchQuery()}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Tabs isFitted variant="enclosed">
          <TabList>
            {data.map((element) => (
              <Tab key={element.label}> {element.label}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {data.map((element) => (
              <TabPanel p={5} key={element.label}>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    placeholder={`Search by ${element.label} in ${element.URL}`}
                    id={`searchBy${element.label}`}
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={`Search by ${element.label}`}
                      icon={<SearchIcon />}
                      onClick={() => SearchBoxQuery(element)}
                    />
                  </InputRightElement>
                </InputGroup>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    );
  }

  // 3. Pass the props and chill!
  return <SearchTabs data={tabData} />;
}

export default SearchBox;
