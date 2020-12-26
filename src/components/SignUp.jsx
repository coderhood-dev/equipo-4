import React from 'react';
import { useHistory } from 'react-router-dom';
import { Flex, Heading, Text, Input, Button } from '@chakra-ui/react';
import useAuth from '../hooks/useAuth';
import Header from './Header';

function SignUp() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const history = useHistory();

  const { signup } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    setLoading(true);

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    signup(user)
      .then(() => {
        setErrors([]);
        setLoading(false);

        history.push('/signin');
      })
      .catch((e) => {
        setErrors(e);
        setLoading(false);
      });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    history.push('/signin');
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
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
        SignUp
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
            Welcome :D
          </Text>
          <Input
            mb="1rem"
            placeholder="First name"
            onChange={handleFirstNameChange}
            bg="white"
          />
          <Input
            mb="1rem"
            placeholder="Last name"
            onChange={handleLastNameChange}
            bg="white"
          />
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
          {errors.map((error, i) => (
            <Text
              key={i.id}
              color="white"
              bg="red.400"
              w="200px"
              textAlign="center"
              borderRadius="8px"
              borderBottom="1px solid #942c2c"
              boxShadow="1px 1px 1px 1px rgba(0,0,0, 0.3)"
              m="5px"
            >
              {error}
            </Text>
          ))}
          <Button
            bg="#065666"
            mt="20px"
            color="white"
            _hover={{ bg: '#0987A0' }}
            type="submit"
            boxShadow="1px 1px 1px 1px #2b3f3f"
            onSubmit={handleSubmit}
            disabled={loading}
            isLoading={loading}
          >
            SignUp
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
          onClick={handleSignIn}
          _hover={{ bg: '#0987A0' }}
        >
          You do have an account? Sign in
        </Button>
      </Flex>
    </div>
  );
}

export default SignUp;
