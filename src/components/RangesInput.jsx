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

function RangesInput({ list, category, userQuery, handleStringChange }) {
  return (
    <Box>
      <h2>{category}</h2>
      {list.map(({ id, label }) => (
        <FormControl
          key={id}
          id={id}
          label={label}
          onChange={(e) => {
            handleStringChange(e);
          }}
        >
          <FormLabel>{label}</FormLabel>
          <NumberInput value={userQuery.id}>
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
