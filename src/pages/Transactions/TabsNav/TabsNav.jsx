import { NavLink } from 'react-router';
import './TabsNav.scss';

const TABS = [
  { label: 'Clients', path: 'clients' },
  { label: 'Deposit', path: 'deposit' },
  { label: 'Withdraw', path: 'withdraw' },
  { label: 'Loans', path: 'loans' },
  { label: 'Transaction History', path: 'history' },
];

export const TabsNav = () => {

  return (
    <nav className="tabs-nav">
      <ul className="tabs-list">
        {TABS.map((tab) => (
          <li key={tab.label} className="tab-item">
            <NavLink to={tab.path} className={({isActive}) => `tab-button ${isActive ? 'active' : ''}`}>
              {tab.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
