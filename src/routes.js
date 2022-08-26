import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import Login from "./pages/Login";
import Account from "./pages/Account";
import DefaultPage from "./components/DefaultPage";
import { LoginProvider } from 'common/context/login';
import { AccountProvider } from 'common/context/account';
import ProtectedRoute from 'components/ProtectedRoute';

export default function Router() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={
              <LoginProvider>
                <Login />
              </LoginProvider>
            } />
            <Route path="account" element={
              <ProtectedRoute>
                <AccountProvider>
                  <Account />
                </AccountProvider>
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  );
}
