import { React } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import CardItem from './CardItem';

function CardList({ items }) {
  return (
    <SimpleGrid minChildWidth="320px" spacing="5" alignContent="center">
      {items &&
        items.map((item, i) => (
          <CardItem
            item={item}
            prevItem={items[i - 1]}
            nextItem={items[i + 1]}
            key={item.id}
          />
        ))}
    </SimpleGrid>
  );
}

export default CardList;
