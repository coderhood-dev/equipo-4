import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import SearchResults from './SearchResults';

function HomeScreen() {
  const tabList = [
    {
      tabTitle: 'Top Popular',
      tabURL: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_QUICKSEARCH_KEY}&sort=popularity`,
      tabID: 'topPopular',
    },
    {
      tabTitle: 'Top Healthy',
      tabURL: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_QUICKSEARCH_KEY}&sort=healthiness`,
      tabID: 'topHealthy',
    },
    {
      tabTitle: 'Discover more!',
      tabURL: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_QUICKSEARCH_KEY}&sort=random`,
      tabID: 'discoverMore',
    },
  ];
  return (
    <Box>
      <Tabs isFitted isLazy variant="enclosed">
        <TabList mb="1em">
          {tabList.map((item) => (
            <Tab key={item.tabID}>{item.tabTitle}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabList.map((item) => (
            <TabPanel key={item.tabID}>
              <SearchResults queryURL={item.tabURL} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default HomeScreen;
