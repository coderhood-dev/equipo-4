import { React } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import CardItem from './CardItem';

function CardList({ items }) {
  return (
    <SimpleGrid minChildWidth="320px" spacing="5" alignContent="center">
      {items &&
        items.map((item, i) => {
          const maxIndex = items.length - 1;
          console.log('maxIndex', maxIndex);
          return (
            <CardItem
              item={item}
              prevItem={i > 0 ? items[i - 1] : undefined}
              nextItem={i < maxIndex ? items[i + 1] : undefined}
              key={item.id}
            />
          );
        })}
    </SimpleGrid>
  );
}

export default CardList;
