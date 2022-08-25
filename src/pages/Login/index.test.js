import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { render } from './../../test-utils';

import Login from './';
import { ApolloProvider } from '@apollo/client';
import client from './../../service';

describe('<Login />', () => {
  let user;
  let emailInput;
  let passwordInput;
  let loginButton;

  beforeEach(() => {
    render(
      <ApolloProvider client={client}>
        <Login />
      </ApolloProvider>
    );
    user = userEvent.setup()
    emailInput = screen.getByRole('textbox');
    passwordInput = screen.getByLabelText('Password');
    loginButton = screen.getByText('Login');
  });

  it('shows email validation error', async () => {
    await user.type(emailInput, 'invalid');
    const errorMessageElement = screen.getByText('Constraints not satisfied');
    expect(errorMessageElement).toBeInTheDocument();
  });

  it('shows loading button', async () => {
    await user.type(emailInput, 'valid-email@example.com');
    await user.type(passwordInput, 'any password');
    await user.click(loginButton);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeInTheDocument();
  });

  it('shows invalid credentials error', async () => {
    await user.type(emailInput, 'valid-email@example.com');
    await user.type(passwordInput, 'any password');
    await user.click(loginButton);

    await waitFor(() => {
      const errorMessageElement = screen.getByText('Invalid credentials');
      expect(errorMessageElement).toBeInTheDocument();
    });
  });
});
