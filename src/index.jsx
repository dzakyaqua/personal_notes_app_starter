import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import PersonalDaily from './layout/PersonalDaily';
import { ThemeProviderWrapper } from './context/themeContext';
import { AuthProvider } from './context/AuthContext';
    
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProviderWrapper>
    <AuthProvider>
      <BrowserRouter>
        <PersonalDaily />
      </BrowserRouter>
    </AuthProvider>
  </ThemeProviderWrapper>
);

