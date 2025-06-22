import React, { useState,useContext  } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import useInput from '../hooks/useInput'; 
import { login } from '../utils/network-data'; 
import AuthContext from '../context/AuthContext';

function LoginPage() {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const { loginSuccess } = useContext(AuthContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const response = await login({ email, password });

    if (!response.error) {
      await loginSuccess(response.data.accessToken);
      navigate('/'); // redirect ke homepage
    } else {
      setErrorMsg(response.message || 'Login gagal');
    }
  };

  return (
    <section className="login-page">
      <h2>Login</h2>
      <form onSubmit={onSubmitHandler} className="login-form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={onEmailChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={onPasswordChange}
          required
          minLength={8}
        />
        {errorMsg && <p className="error-message">{errorMsg}</p>}
        <button type="submit">Login</button>
      </form>
      <p>Belum punya akun? <Link to="/register">register di sini</Link></p>
    </section>
  );
}

export default LoginPage;
