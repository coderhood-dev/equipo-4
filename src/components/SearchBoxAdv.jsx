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
    type: 'Advanced Search',
    URL: 'advanced-search API',
  },
];

function SearchBox() {
  const [query, setQuery] = useState(null);
  const [queryType, setqueryType] = useState(tabData[0]);
  //  const [value, setValue] = useState(tabData[0].label);

  const SearchQuery = () => {
    console.log(queryType);
    console.log(query);
  };

  // 1. Create the component
  function SearchTabs({ data }) {
    return (
      <Box>
        <Box>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              placeholder={`${queryType.type}`}
              id={`searchBy${queryType.type}`}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
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
        <Tabs isFitted variant="enclosed">
          <TabList>
            {data.map((element) => (
              <Tab key={element.type} onClick={() => setqueryType(element)}>
                {element.type}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {data.map((element) => (
              <TabPanel p={5} key={element.type}>
                {element.type}
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
