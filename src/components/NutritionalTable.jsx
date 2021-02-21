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
    <Table variant="simple" size="sm" bg="#b62a07" color="white">
      <TableCaption
        placement="top"
        fontSize="xl"
        color="#b62a07"
        fontWeight="bold"
      >{`Nutritional information per serving (${
        weightPerServing.amount + weightPerServing.unit
      })`}</TableCaption>
      <Thead>
        <Tr>
          <Th />
          <Th isNumeric color="white">
            Amount per serving
          </Th>
          <Th isNumeric color="white">
            % of daily needs
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {nutrients.map((nutrient) => (
          <Tr key={nutrient.name}>
            <Td>{nutrient.name}</Td>
            <Td isNumeric>{`${nutrient.amount} ${nutrient.unit}`}</Td>
            <Td isNumeric>{Math.round(nutrient.percentOfDailyNeeds)}</Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th />
          <Th isNumeric color="white">
            Amount per serving
          </Th>
          <Th isNumeric color="white">
            % of daily needs
          </Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

export default NutritionalTable;
