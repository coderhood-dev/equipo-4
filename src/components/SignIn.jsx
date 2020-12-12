import React from 'react';
import { useHistory } from 'react-router-dom';
import { Flex, Button, Input, Heading, Text } from '@chakra-ui/react';

import Header from './Header';

function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('signin:', email, password);
    history.push('/');
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    history.push('/signup');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <Header pagename="" />
      <Heading as="h1" textAlign="center" mt="2rem" color="#065666">
        SignIn
      </Heading>
      <Flex direction="column" alignItems="center" mt="3rem">
        <Flex
          as="form"
          w="400px"
          p="2rem"
          direction="column"
          alignItems="center"
          backgroundColor="white"
          border="1px solid #e6e3e3"
          boxShadow="1px 1px 1px 1px #0b879c"
          bg="#c7eaf1"
          borderRadius="8px"
          onSubmit={handleSubmit}
        >
          <Text mb="2rem" color="#065666">
            Good to see you again :D
          </Text>
          {/* <Heading mb="2rem" mt="2rem">SignIn</Heading> */}
          <Input
            mb="1rem"
            placeholder="Email"
            onChange={handleEmailChange}
            bg="white"
          />
          <Input
            mb="1rem"
            placeholder="Password"
            onChange={handlePasswordChange}
            bg="white"
          />
          <Button
            bg="#065666"
            mt="20px"
            color="white"
            _hover={{ bg: '#0987A0' }}
            type="submit"
            boxShadow="1px 1px 1px 1px #2b3f3f"
          >
            SignIn
          </Button>
        </Flex>
        <Button
          boxShadow="1px 1px 1px 1px #2b3f3f"
          bg="#065666"
          borderRadius="8px"
          mt="2rem"
          mb="3rem"
          color="white"
          variant="ghost"
          onClick={handleSignUp}
          _hover={{ bg: '#0987A0' }}
        >
          You do not have an account? Sign up
        </Button>
      </Flex>
    </div>
  );
}

export default SignIn;
