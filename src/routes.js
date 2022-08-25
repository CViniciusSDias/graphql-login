import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import DefaultPage from "./components/DefaultPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
