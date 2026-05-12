import logoIcon from '../../assets/icons/logo.svg';
import socialIcon from '../../assets/icons/social.svg';
import listIcon from '../../assets/icons/list.svg';
import { useSelector } from 'react-redux';
import './Header.scss';

export const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);

  return (
    <div className="header">
      <img src={logoIcon} alt="Antifraud Logo" className="logo" />
      <div className="header-nav">
        <img src={socialIcon} alt="Social icon" />
        <p>
          {currentUser
            ? `${currentUser.firstName} ${currentUser.lastName}`
            : 'Guest'}
        </p>
        <img src={listIcon} alt="Navigation icon" />
      </div>
    </div>
  );
};
