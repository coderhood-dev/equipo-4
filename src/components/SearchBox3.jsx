import { React, useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function SearchBox3() {
  const radioData = [
    {
      label: 'Recipe',
      URL: 'recipe-API.com',
    },
    {
      label: 'Ingredients',
      URL: 'ingredients-API.com',
    },

    {
      label: 'Nutritional Info',
      URL: 'nut-info-API.com',
    },
  ];

  function SearchRadio3({ data }) {
    const [query, setQuery] = useState(null);
    const [queryType, setqueryType] = useState(radioData[0]);
    const [value, setValue] = useState(radioData[0].label);

    const SearchQuery = () => {
      console.log(queryType);
      console.log(query);
    };

    const handleChange = (dataPair) => {
      setqueryType(dataPair);
    };

    return (
      <Box>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            {data.map((element) => (
              <Radio
                key={element.label}
                value={element.label}
                onChange={() => handleChange(element)}
              >
                Search By {element.label}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            placeholder={`Search by ${queryType.label}`}
            id={`searchBy${queryType.label}`}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <InputRightElement>
            <IconButton
              aria-label={`Search by ${queryType.label}`}
              icon={<SearchIcon />}
              onClick={() => SearchQuery()}
            />
          </InputRightElement>
        </InputGroup>
      </Box>
    );
  }
  return <SearchRadio3 data={radioData} />;
}

export default SearchBox3;
