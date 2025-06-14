import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';


function PersonalDaily() {
  return (
    <div className="Daily_Notes">
      <header className='Aplikasi_Catatan_Pribadi'>
        <h1>Aplikasi Kontak</h1>
      </header>
       <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}
 
export default PersonalDaily;