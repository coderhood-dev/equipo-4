import { React } from 'react';
import { Box } from '@chakra-ui/react';
import InputElement from './NumberInput';

function RangesInput({ list, category }) {
  return (
    <Box>
      <h2>{category}</h2>
      {list.map(({ id, label }) => (
        <InputElement key={id} id={id} label={label} />
      ))}
    </Box>
  );
}

export default RangesInput;
