import logoIcon from '../../assets/icons/logo.svg';
import socialIcon from '../../assets/icons/social.svg';
import listIcon from '../../assets/icons/list-filled.svg';
import { useDispatch, useSelector } from 'react-redux';
import './Header.scss';
import { useState } from 'react';
import { logoutUser } from '../../entities/user/model/userSlice';
import { useNavigate } from 'react-router';

export const Header = ({ onMenuClick }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogOut = () => {
    localStorage.removeItem('currentUser');
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <header className="header">
      <button className="mobile-menu-btn" onClick={onMenuClick}>
        {' '}
        ☰{' '}
      </button>
      <img src={logoIcon} alt="Antifraud Logo" className="logo" />
      <div className="header-nav" onClick={toggleDropdown}>
        <img src={socialIcon} alt="Social icon" />
        <p>
          {currentUser
            ? `${currentUser.firstName} ${currentUser.lastName}`
            : 'Guest'}
        </p>
        <img src={listIcon} alt="Navigation icon" />
        {isDropdownOpen && (
          <div className="user-dropdown">
            <button className="logout-btn" onClick={handleLogOut}>
              Log Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
