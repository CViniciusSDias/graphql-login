import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  CircularProgress,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';

import { LOGIN } from 'service/mutations';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);

  const [emailValue, setEmailValue] = useState('');
  const [emailInputValidationMessage, setEmailInputValidationMessage] = useState('');
  const handleEmailChange = input => {
    setEmailValue(input.value);
    setEmailInputValidationMessage(input.validationMessage);
  };

  const [passwordValue, setPasswordValue] = useState('');
  const [login, { loading: loadingLogin, error: loginError }] = useMutation(LOGIN);

  function submitLoginForm(e) {
    e.preventDefault();
    login({
      variables: {
        input: {
          identifier: emailValue,
          password: passwordValue
        }
      }
    })
    .then(({ data }) => console.log(data.login.jwt))
    .catch(console.dir);
  }

  return (
    <Box maxW='lg' borderWidth='1px' borderRadius='lg' margin="0 auto" p={6}>
      <Text textAlign={'center'} fontSize={"4xl"}>Login form</Text>

      {loginError && <Text textAlign={'center'} color='red.400' fontWeight='bold'>Invalid credentials</Text>}

      <form onSubmit={submitLoginForm}>
        <FormControl mb={5} isInvalid={emailInputValidationMessage.length > 0}>
          <FormLabel>Email address</FormLabel>
          <Input type='email' value={emailValue} onChange={e => handleEmailChange(e.target)} required={true} />
          <FormErrorMessage textAlign={'left'}>{emailInputValidationMessage}</FormErrorMessage>
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>Password</FormLabel>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter password'
              value={passwordValue} onChange={e => setPasswordValue(e.target.value)}
              required={true}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button colorScheme='teal' type='submit' disabled={loadingLogin}>
          {loadingLogin ? <CircularProgress isIndeterminate color='grey' size='30px' /> : 'Login'}
        </Button>
      </form>
    </Box>
  );
}
