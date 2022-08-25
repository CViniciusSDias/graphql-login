import React, { StrictMode } from 'react';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';

import Router from "./routes";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript/>
      <Router />
    </ChakraProvider>
  </StrictMode>
);
