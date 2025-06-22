import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { register } from '../utils/network-data';

function RegisterPage() {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (password.length < 8) {
      setErrorMsg('Password minimal 8 karakter');
      return;
    }

    const response = await register({ name, email, password });

    if (!response.error) {
      setSuccessMsg('Registrasi berhasil, silakan login');
      setTimeout(() => navigate('/login'), 2000);
    } else {
      setErrorMsg(response.message);
    }
  };

  return (
    <section className="register-page">
      <h2>Register</h2>
      <form onSubmit={onSubmitHandler} className="register-form">
        <label htmlFor="name">Nama</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={onNameChange}
          required
        />

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
        />

        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}

        <button type="submit">Register</button>
      </form>
      <p>Sudah punya akun? <Link to="/login">Login di sini</Link></p>
    </section>
  );
}

export default RegisterPage;
