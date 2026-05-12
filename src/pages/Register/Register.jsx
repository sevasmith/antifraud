import { useState } from 'react';
import logoIcon from '../../assets/icons/logo.svg';
import { useNavigate } from 'react-router';
import './Register.scss';

export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    if (firstName.length < 2) {
      setError('First name must be at least 2 characters');
      return;
    }
    if (lastName.length < 2) {
      setError('Last name must be at least 2 characters');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    const registeredUsers =
      JSON.parse(localStorage.getItem('registeredUsers')) || [];

    if (registeredUsers.some((user) => user.email === email)) {
      setError('An account with this email already exists');
      return;
    }

    const newUser = { firstName, lastName, email, password };
    registeredUsers.push(newUser);

    localStorage.setItem('currentUser', JSON.stringify(newUser));
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    navigate('/dashboard');
  };

  return (
    <div className="register-page">
      <div className="register-content">
        <img src={logoIcon} alt="Antifraud Logo" className="register-logo" />
        <h2 className="register-title">Register</h2>
        <form onSubmit={onSubmit} className="register-form">
          <div className="register-field">
            <label>First Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => {
                setFirstName(e.target.value);
                setError('');
              }}
              value={firstName}
            ></input>
          </div>
          <div className="register-field">
            <label>Last Name</label>
            <input
              type="text"
              name="surname"
              onChange={(e) => {
                setLastName(e.target.value);
                setError('');
              }}
              value={lastName}
            ></input>
          </div>
          <div className="register-field">
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
          <div className="register-field">
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
          <button type="submit">Register</button>
        </form>
        <div className="error-message">{error ? error : ''}</div>
        <p className="register-title">Already have an account?</p>
        <button className="login-button" onClick={() => navigate('/login')}>
          Log In
        </button>
      </div>
    </div>
  );
};
