import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import PersonalDaily from './layout/PersonalDaily';
// import DailyDetail from './pages/DailyDetail';
    
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <PersonalDaily/>
    </BrowserRouter>
);

