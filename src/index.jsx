import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import PersonalDaily from './layout/PersonalDaily';
import { ThemeProviderWrapper } from './context/themeContext';
    
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <ThemeProviderWrapper>
        <BrowserRouter>
            <PersonalDaily />
        </BrowserRouter>
  </ThemeProviderWrapper>
);

