import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { mainTheme } from '../themes/mainTheme';
import { Catalog } from './pages/catalog';

export const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navigate to={'/catalog'} replace />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </ThemeProvider>
  );
};
