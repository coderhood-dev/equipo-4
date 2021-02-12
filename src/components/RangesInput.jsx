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

function RangesInput({ list, category, userQuery, handleNumberChange }) {
  return (
    <Box>
      <h2>{category}</h2>
      {list.map(({ id, label }) => {
        return (
          <FormControl
            key={id}
            id={id}
            label={label}
            onChange={(e) => {
              handleNumberChange(e);
            }}
          >
            <FormLabel>{label}</FormLabel>
            <NumberInput defaultValue={userQuery[id] || null}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        );
      })}
    </Box>
  );
}

export default RangesInput;
