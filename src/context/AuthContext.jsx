// src/context/AuthContext.js
import { createContext, useEffect, useState } from 'react';
import { getUserLogged, putAccessToken } from '../utils/network-data'; // sesuaikan jika foldernya 'utilis'

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await getUserLogged();
      if (!error) {
        setAuthedUser(data);
      }
      setInitializing(false);
    };

    fetchUser();
  }, []);

  const loginSuccess = async (accessToken) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAuthedUser(null);
  };

  return (
    <AuthContext.Provider value={{ authedUser, loginSuccess, logout, initializing }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
