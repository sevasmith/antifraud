import { useNavigate } from 'react-router';
import listEmptyIcon from '../../assets/icons/list-empty.svg';

export const SidebarItem = ({ label, icon, hasDropdown, link }) => {
  const navigate = useNavigate();

  return (
    <div
      className="sidebar-item"
      onClick={() => (link ? navigate(link) : null)}
    >
      <div className="icon-container">
        <img src={icon} alt={`${label} Icon`} />
      </div>
      <p>{label}</p>
      {hasDropdown ? (
        <div className="list-icon-container">
          <img src={listEmptyIcon} alt="List Icon" />
        </div>
      ) : null}
    </div>
  );
};
