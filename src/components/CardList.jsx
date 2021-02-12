import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { React } from 'react';

function CardItem({ item }) {
  return (
    <Flex
      id={item.id}
      borderRadius="lg"
      background="gray.200"
      overflow="hidden"
      padding="5"
      maxW="sm"
      direction="column"
      margin="auto"
    >
      <Image src={item.image} alt={item.title} fit="cover" />
      <Box>
        <Text>{item.title}</Text>
      </Box>
    </Flex>
  );
}

function CardList({ items }) {
  return (
    <SimpleGrid minChildWidth="320px" spacing="5" alignContent="center">
      {items && items.map((item) => <CardItem item={item} key={item.id} />)}
    </SimpleGrid>
  );
}

export default CardList;
