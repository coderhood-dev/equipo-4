import { React } from 'react';
import { Radio, RadioGroup, Box } from '@chakra-ui/react';

function RadioInput({ list, category, handleCheckboxChange, value }) {
  return (
    <Box>
      <h2>{category}</h2>
      <RadioGroup
        colorScheme="green"
        onChange={handleCheckboxChange}
        value={value}
      >
        {list.map((element) => (
          <Radio key={element.label} id={element.id} value={element.id}>
            {element.label}
          </Radio>
        ))}
      </RadioGroup>
    </Box>
  );
}

export default RadioInput;
