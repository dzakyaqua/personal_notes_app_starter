import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import PersonalDaily from './components/PersonalDaily';
    
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <PersonalDaily/>
    </BrowserRouter>
);

