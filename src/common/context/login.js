import { createContext, useCallback, useContext, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { LOGIN } from 'common/service/mutations';

const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');

  return (
    <LoginContext.Provider
      value={{
        showPassword,
        setShowPassword,
        email,
        setEmail,
        password,
        setPassword,
        emailValidationMessage,
        setEmailValidationMessage,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

const useLoginContext = () => {
  const {
    showPassword,
    setShowPassword,
    emailValidationMessage,
    setEmailValidationMessage,
    email,
    setEmail,
    password,
    setPassword
  } = useContext(LoginContext);
  const [login, { loading: loadingLogin, error: loginError }] = useMutation(LOGIN);
  const navigate = useNavigate();
  const [, setCookie, deleteCookie] = useCookies(['token']);
  deleteCookie('token');

  function handleShowPassword() {
    setShowPassword(showPassword => !showPassword);
  }

  function submitLoginForm(e) {
    e.preventDefault();

    login({
      variables: {
        input: {
          identifier: email,
          password: password
        }
      }
    })
    .then(({ data }) => data.login.jwt)
    .then(jwt => setCookie('token', jwt, { secure: true }))
    .then(_ => navigate('/account'))
    .catch(_ => {});
  }

  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
    setEmailValidationMessage(event.target.validationMessage);
  }, [setEmail, setEmailValidationMessage]);

  const handlePasswordChange = useCallback((event) => setPassword(event.target.value), [setPassword]);

  return {
    showPassword,
    handleShowPassword,
    handleEmailChange,
    submitLoginForm,
    emailValidationMessage,
    email,
    password,
    handlePasswordChange,
    loadingLogin,
    loginError,
  };
}

export default useLoginContext;
