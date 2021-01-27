import { React } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

function NutritionalTable({ data }) {
  const {
    nutrition: { nutrients, weightPerServing },
  } = data;

  return (
    <Table variant="simple" size="sm">
      <TableCaption
        placement="top"
        fontSize="xl"
      >{`Nutritional information per serving (${
        weightPerServing.amount + weightPerServing.unit
      })`}</TableCaption>
      <Thead>
        <Tr>
          <Th />
          <Th isNumeric>Amount per serving</Th>
          <Th isNumeric>% of daily needs</Th>
        </Tr>
      </Thead>
      <Tbody>
        {nutrients.map((nutrient) => (
          <Tr key={nutrient.name}>
            <Td>{nutrient.name}</Td>
            <Td isNumeric>{`${nutrient.amount} ${nutrient.unit}`}</Td>
            <Td isNumeric>{nutrient.percentOfDailyNeeds}</Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th />
          <Th isNumeric>Amount per serving</Th>
          <Th isNumeric>% of daily needs</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

export default NutritionalTable;
