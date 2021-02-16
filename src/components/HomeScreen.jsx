import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import SearchResults from './SearchResults';

function HomeScreen() {
  const tabList = [
    {
      tabTitle: 'Top Popular',
      tabQuery: `?sort=popularity`,
      tabID: 'topPopular',
    },
    {
      tabTitle: 'Top Healthy',
      tabQuery: `?sort=healthiness`,
      tabID: 'topHealthy',
    },
    {
      tabTitle: 'Discover more!',
      tabQuery: `?sort=random`,
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
              <SearchResults query={item.tabQuery} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default HomeScreen;
