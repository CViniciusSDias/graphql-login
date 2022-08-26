import { ApolloProvider } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import createApolloClient from 'common/service';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';

export default function DefaultPage() {
  const [ cookies ] = useCookies(['token']);
  return (
    <Box maxW='lg' borderWidth='1px' borderRadius='lg' margin="1rem auto" p={6}>
      <ColorModeSwitcher />
      <Box fontSize="xl" p={4}>
        <ApolloProvider client={createApolloClient(cookies.token)}>
          <Outlet />
        </ApolloProvider>
      </Box>
    </Box>
  )
}
