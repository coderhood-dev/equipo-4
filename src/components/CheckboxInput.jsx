import { React } from 'react';
import { Checkbox, CheckboxGroup, Box } from '@chakra-ui/react';

function CheckboxInput({ list, category, handleCheckboxChange, value }) {
  return (
    <Box m="10px" color="white">
      <h2>{category}</h2>
      <CheckboxGroup
        colorScheme="red"
        onChange={handleCheckboxChange}
        defaultValue={value}
      >
        {list.map((element) => (
          <Checkbox
            m="10px"
            key={element.label}
            id={element.id}
            value={element.id}
          >
            {element.label}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </Box>
  );
}

export default CheckboxInput;
