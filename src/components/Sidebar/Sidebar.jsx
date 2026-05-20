import { SidebarItem } from './SidebarItem';
import dashboardIcon from '../../assets/icons/dashboard.svg';
import reportsIcon from '../../assets/icons/reports.svg';
import transactionsIcon from '../../assets/icons/transactions.svg';
import helpIcon from '../../assets/icons/help.svg';
import settingsIcon from '../../assets/icons/settings.svg';
import './Sidebar.scss';
import { useLocation } from 'react-router';

const SIDEBAR_ITEMS = [
  { id: 1, label: 'Dashboard', icon: dashboardIcon, link: '/dashboard' },
  {
    id: 2,
    label: 'Reports',
    icon: reportsIcon,
    hasDropdown: true,
    link: '/reports',
  },
  {
    id: 3,
    label: 'Transactions',
    icon: transactionsIcon,
    hasDropdown: true,
    link: '/transactions',
  },
  { id: 4, label: 'Help', icon: helpIcon },
  { id: 5, label: 'Settings', icon: settingsIcon },
];

export const Sidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation();
  const isCollapsed = location.pathname.startsWith('/reports');

  return (
    <>
      {isOpen && (
        <div className="sidebar-backdrop" onClick={closeSidebar}></div>
      )}
      <aside
        onClick={closeSidebar}
        className={`sidebar ${isOpen ? 'open' : ''} ${isCollapsed ? 'collapsed' : ''}`}
      >
        <p className="sidebar-title">Fraud Management</p>
        <nav className="sidebar-nav">
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarItem
              key={item.id}
              label={item.label}
              icon={item.icon}
              hasDropdown={item.hasDropdown}
              link={item.link}
            />
          ))}
        </nav>
      </aside>
    </>
  );
};
