import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import useInput from '../hooks/useInput'; 
import { login } from '../utils/network-data'; 

function LoginPage() {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const response = await login({ email, password });

    if (!response.error) {
      localStorage.setItem('accessToken', response.data.accessToken);
      navigate('/'); // redirect ke homepage
    } else {
      setErrorMsg(response.message);
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
