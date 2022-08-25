import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from 'common/service';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function DefaultPage() {
  return (
    <>
      <ColorModeSwitcher position='absolute' top={10} right={10} />
      <Box fontSize="xl" p={4}>
        <ApolloProvider client={client}>
          <Outlet />
        </ApolloProvider>
      </Box>
    </>
  )
}
