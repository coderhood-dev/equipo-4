import { React } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import CardItem from './CardItem';

function CardList({ items }) {
  return (
    <SimpleGrid minChildWidth="320px" spacing="5" alignContent="center">
      {items &&
        items.map((item) => {
          return <CardItem galleryArray={items} item={item} key={item.id} />;
        })}
    </SimpleGrid>
  );
}

export default CardList;
