import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import Login from "./pages/Login";
import User from "./pages/User";
import DefaultPage from "./components/DefaultPage";
import { LoginProvider } from 'common/context/login';
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
            <Route path="user" element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  );
}
