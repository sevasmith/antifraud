import { NavLink } from 'react-router';
import listEmptyIcon from '../../assets/icons/list-empty.svg';

export const SidebarItem = ({ label, icon, hasDropdown, link }) => {
  const content = (
    <>
      <div className="icon-container">
        <img src={icon} alt={`${label} Icon`} />
      </div>
      <p className='sidebar-label'>{label}</p>
      {hasDropdown && (
        <div className="list-icon-container">
          <img src={listEmptyIcon} alt="List Icon" />
        </div>
      )}
    </>
  );

  if (!link) {
    return <div className="sidebar-item">{content}</div>;
  }

  return (
    <NavLink
      to={link}
      className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
    >
      {content}
    </NavLink>
  );
};
