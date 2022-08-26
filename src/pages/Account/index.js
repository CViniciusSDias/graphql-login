import { Box, Button, Text, CircularProgress } from '@chakra-ui/react';
import useAccountContext from 'common/context/account';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Account() {
  const { firstName, lastName, handleLogout, loading, error } = useAccountContext();
  const { t } = useTranslation();

  if (loading) {
    return <Box textAlign="center">
      <CircularProgress isIndeterminate color="grey" size="sm" />
    </Box>;
  }
  if (error) return <Navigate to="/" />;

  return (
    <>
      <Box textAlign="right">
          <Button textAlign="right" onClick={handleLogout}>{t('Logout')}</Button>
      </Box>
      <Text fontSize="4xl" mb={1}>{t('Account details')}</Text>
      <Text as="b">{t('First name')}:</Text>&nbsp;
      <Text as="i">{firstName}</Text>
      <br />
      <Text as="b">{t('Last name')}:</Text>&nbsp;
      <Text as="i">{lastName}</Text>
    </>
  );
}