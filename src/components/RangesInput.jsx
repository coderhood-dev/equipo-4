import { React } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

function RangesInput({ list, category }) {
  return (
    <Box>
      <h2>{category}</h2>
      {list.map(({ id, label }) => (
        <FormControl
          key={id}
          id={id}
          label={label}
          onChange={(e) => {
            return console.log({ [e.target.id]: e.target.value });
          }}
        >
          <FormLabel>{label}</FormLabel>
          <NumberInput>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      ))}
    </Box>
  );
}

export default RangesInput;
