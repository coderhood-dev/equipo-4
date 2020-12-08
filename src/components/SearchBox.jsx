import { React, useState } from 'react';
import {
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

function SearchBox() {
  const [query, setQuery] = useState(null);
  const SearchBoxQuery = (searchPair) => {
    console.log(`${query} ${searchPair.label} in ${searchPair.URL}`);
  };
  // 1. Create the component
  function SearchTabs({ data }) {
    return (
      <Tabs isFitted variant="enclosed">
        <TabList>
          {data.map((element) => (
            <Tab key={element.label}> Search By {element.label}</Tab>
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
    );
  }

  // 2. Create an array of data
  const tabData = [
    {
      label: 'Recipe',
      URL: 'recipe-API.com',
    },
    {
      label: 'Ingredients',
      URL: 'ingredients-API.com',
    },

    {
      label: 'Nutritional Info',
      URL: 'nut-info-API.com',
    },
  ];

  // 3. Pass the props and chill!
  return <SearchTabs data={tabData} />;
}

export default SearchBox;
