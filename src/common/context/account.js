import { createContext, useCallback, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { USER } from 'common/service/queries';

const AccountContext = createContext(null);

export const AccountProvider = ({ children }) => {
  const { data, loading, error } = useQuery(USER, { variables: { id: 2 }});

  return (
    <AccountContext.Provider
      value={{
        firstName: data?.user?.firstName,
        lastName: data?.user?.lastName,
        loading,
        error,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

const useAccountContext = () => {
  const { firstName, lastName, loading, error } = useContext(AccountContext);
  const [ , , deleteCookie ] = useCookies(['token']);
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    deleteCookie('token');
    navigate('/');
  }, [deleteCookie, navigate])

  return {
    firstName,
    lastName,
    handleLogout,
    loading,
    error,
  }
};
export default useAccountContext;