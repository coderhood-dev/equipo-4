import { React } from 'react';
import { Checkbox, CheckboxGroup, Box } from '@chakra-ui/react';

function CheckboxInput({ list, category, handleCheckboxChange, value }) {
  return (
    <Box>
      <h2>{category}</h2>
      <CheckboxGroup
        colorScheme="green"
        onChange={handleCheckboxChange}
        defaultValue={value}
      >
        {list.map((element) => (
          <Checkbox key={element.label} id={element.id} value={element.id}>
            {element.label}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </Box>
  );
}

export default CheckboxInput;
