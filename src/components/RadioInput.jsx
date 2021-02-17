import { React } from 'react';
import { Radio, RadioGroup, Box } from '@chakra-ui/react';

function RadioInput({ list, category, handleCheckboxChange, value }) {
  return (
    <Box>
      <h2>{category}</h2>
      <RadioGroup
        colorScheme="red"
        onChange={handleCheckboxChange}
        value={value}
        m="10px"
      >
        {list.map((element) => (
          <Radio
            _focus={{ border: 'none' }}
            m="10px"
            key={element.label}
            id={element.id}
            value={element.id}
          >
            {element.label}
          </Radio>
        ))}
      </RadioGroup>
    </Box>
  );
}

export default RadioInput;
