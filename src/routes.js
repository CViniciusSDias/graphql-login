import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import DefaultPage from "./components/DefaultPage";
import { LoginProvider } from 'common/context/login';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={
            <LoginProvider>
              <Login />
            </LoginProvider>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
