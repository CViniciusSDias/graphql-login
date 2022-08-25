import {
  Box,
  Text,
  Button,
  CircularProgress,
} from '@chakra-ui/react';

import useLoginContext from 'common/context/login';
import FormControl from 'components/FormControl';

export default function Login() {
  const context = useLoginContext();

  return (
    <Box maxW='lg' borderWidth='1px' borderRadius='lg' margin="0 auto" p={6}>
      <Text textAlign={'center'} fontSize={"4xl"}>Login form</Text>

      {context.loginError && <Text textAlign={'center'} color='red.400' fontWeight='bold'>Invalid credentials</Text>}

      <form onSubmit={context.submitLoginForm}>
        <FormControl type="email"
                     value={context.email}
                     onChange={context.handleEmailChange}
                     isInvalid={context.emailValidationMessage.length > 0}
                     validationMessage={context.emailValidationMessage}
                     label="Email address" />

        <FormControl type={context.showPassword ? "text" : "password"}
                     value={context.password}
                     onChange={context.handlePasswordChange}
                     label="Password"
                     icon={
                      <Button h='1.75rem' size='sm' onClick={context.handleShowPassword}>
                        {context.showPassword ? 'Hide' : 'Show'}
                      </Button>
                     } />

        <Button colorScheme='teal' type='submit' disabled={context.loadingLogin}>
          {context.loadingLogin ? <CircularProgress isIndeterminate color='grey' size='30px' /> : 'Login'}
        </Button>
      </form>
    </Box>
  );
}
