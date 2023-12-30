// AppRouter.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../auth/pages/LoginPage';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </>
  );
};
