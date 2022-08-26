import {
  Text,
  Button,
  CircularProgress,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import useLoginContext from 'common/context/login';
import FormControl from 'components/FormControl';

export default function Login() {
  const context = useLoginContext();
  const { t } = useTranslation();

  return (
    <>
      <Text textAlign={'center'} fontSize={"4xl"} mb={4}>{t('Login form')}</Text>

      {context.loginError && <Text textAlign={'center'} color='red.400' fontWeight='bold' mb={4}>{t('Invalid credentials')}</Text>}

      <form onSubmit={context.submitLoginForm}>
        <FormControl type="email"
                     value={context.email}
                     onChange={context.handleEmailChange}
                     isInvalid={context.emailValidationMessage.length > 0}
                     validationMessage={context.emailValidationMessage}
                     label={t('Email address')} />

        <FormControl type={context.showPassword ? "text" : "password"}
                     value={context.password}
                     onChange={context.handlePasswordChange}
                     label={t('Password')}
                     icon={
                      <Button h='1.75rem' size='sm' padding="0 1rem" boxSizing='content-box' onClick={context.handleShowPassword}>
                        {t(context.showPassword ? 'Hide' : 'Show')}
                      </Button>
                     } />

        <Button colorScheme='teal' type='submit' disabled={context.loadingLogin}>
          {context.loadingLogin ? <CircularProgress isIndeterminate color='grey' size='30px' /> : t('Login')}
        </Button>
      </form>
    </>
  );
}
