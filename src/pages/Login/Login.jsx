import { useState } from 'react';
import logoIcon from '../../assets/icons/logo.svg';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUser } from '../../entities/user/model/userSlice';
import './Login.scss';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    const registeredUsers =
      JSON.parse(localStorage.getItem('registeredUsers')) || [];

    const currentUser = registeredUsers.find((user) => user.email === email);

    if (!currentUser || currentUser.password !== password) {
      setError('Invalid email or password');
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    dispatch(setUser(currentUser));
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <img src={logoIcon} alt="Antifraud Logo" className="login-logo" />
        <h2 className="login-title">Login</h2>
        <form onSubmit={onSubmit} className="login-form">
          <div className="login-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              value={email}
            ></input>
          </div>
          <div className="login-field">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              value={password}
            ></input>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="error-message">{error ? error : ''}</div>
        <p className="register-title">Do not have an account?</p>
        <button
          className="register-button"
          onClick={() => navigate('/register')}
        >
          Register
        </button>
      </div>
    </div>
  );
};
