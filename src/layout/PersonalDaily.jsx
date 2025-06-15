import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DailyDetail from '../pages/DailyDetail';
import AddPage from '../pages/AddPage'; 

function PersonalDaily() {
  return (
    <div className="note-app">
      <header className="note-app_header">
        <h1>
          <Link to="/">Aplikasi Kontak</Link>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DailyDetail />} />
          <Route path="/notes/new" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default PersonalDaily;
