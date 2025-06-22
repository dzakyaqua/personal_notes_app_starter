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
import AuthContext from '../context/AuthContext';

function PersonalDaily() {
  const navigate = useNavigate();
  
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { authedUser, logout } = useContext(AuthContext);

  const getInitials = (name) => {
    return name?.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const onLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  };



  return (
    <div className="note-app">
      <header className="note-app_header">
        <h1>
          <Link to="/" className="header_Aplikasi_kontak">Aplikasi Kontak</Link>
        </h1>
        <button onClick={toggleTheme} className="toggle-theme-button">
        {theme === 'light' ? <FaRegSun />:<FaRegMoon /> }
        </button>
        {authedUser && (
            <>
              <div className="user-avatar" title={authedUser.name}>
                {getInitials(authedUser.name)}
              </div>
              <button onClick={onLogout} className="logout-button">
                <GiExitDoor />
                Logout
              </button>
            </>
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