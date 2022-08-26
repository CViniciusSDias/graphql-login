import React, { StrictMode } from 'react';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import 'common/i18n';

import Router from './routes';
import ErrorBoundary from 'components/ErrorBoundary';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <ChakraProvider theme={theme}>
        <ColorModeScript/>
        <Router />
      </ChakraProvider>
    </ErrorBoundary>
  </StrictMode>
);
