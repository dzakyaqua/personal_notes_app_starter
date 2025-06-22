import React, { useContext } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { GiExitDoor } from "react-icons/gi";
import { FaRegSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import HomePage from '../pages/HomePage';
import DailyDetail from '../pages/DailyDetail';
import AddPage from '../pages/AddPage'; 
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import RequireAuth from '../components/RequireAuth';
import ThemeContext from '../context/themeContext';

function PersonalDaily() {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  };

  const isLoggedIn = !!localStorage.getItem('accessToken');
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="note-app">
      <header className="note-app_header">
        <h1>
          <Link to="/" className="header_Aplikasi_kontak">Aplikasi Kontak</Link>
        </h1>
        <button onClick={toggleTheme} className="toggle-theme-button">
        {theme === 'light' ? <FaRegSun />:<FaRegMoon /> }
        </button>
        {isLoggedIn && (
          <button onClick={onLogout} className="logout-button">
            <GiExitDoor />
            Logout
          </button>
        )}
      </header>
      <main>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

           {/* Protected Routes */}
          <Route path="/" element={
            <RequireAuth><HomePage /></RequireAuth>
          } />
          <Route path="/notes/new" element={
            <RequireAuth><AddPage /></RequireAuth>
          } />
          <Route path="/notes/:id" element={
            <RequireAuth><DailyDetail /></RequireAuth>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default PersonalDaily;
