import React from 'react';
import {
  ChakraProvider,
  theme,
  Box,
} from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Login from './pages/Login';
import { ApolloProvider } from '@apollo/client';
import client from './service';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher style={{ position: 'absolute', top: 10, right: 10 }} />
      <Box fontSize="xl" p={4}>
        <BrowserRouter>
          <ApolloProvider client={client}>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </ApolloProvider>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
