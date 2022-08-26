import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { render } from 'common/config/test-utils';
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from 'react-router-dom';

import Login from './';
import { LoginProvider } from 'common/context/login';
import { LOGIN } from 'common/service/mutations';

describe('<Login />', () => {
  const mocks = [
    {
      request: {
        query: LOGIN,
        variables: { input: { identifier: 'valid-email@example.com', password: 'any password' } }
      },
      error: new Error(),
    },
    {
      request: {
        query: LOGIN,
        variables: { input: { identifier: 'correct-email@example.com', password: 'correct password' } }
      },
      result: {
        data: {
          login: {
            jwt: "fake token"
          }
        }
      }
    },
  ];

  let user;
  let emailInput;
  let passwordInput;
  let loginButton;

  beforeEach(() => {
    render(
      <MockedProvider mocks={mocks}>
        <MemoryRouter>
          <LoginProvider>
            <Login />
          </LoginProvider>
        </MemoryRouter>
      </MockedProvider>
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

    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'), { timeout: 5000 })
    const errorMessageElement = screen.getByText('Invalid credentials');
    expect(errorMessageElement).toBeInTheDocument();
  });

  it('successfully logs in', async () => {
    await user.type(emailInput, 'correct-email@example.com');
    await user.type(passwordInput, 'correct password');
    await user.click(loginButton);

    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'), { timeout: 5000 })
    const errorMessageElement = screen.queryByText('Invalid credentials');
    expect(errorMessageElement).toBeNull();
  });
});
