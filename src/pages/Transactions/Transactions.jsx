import { Outlet } from 'react-router';
import { TabsNav } from './TabsNav/TabsNav';
import './Transactions.scss';

export const Transactions = () => {
  return (
    <section className="transactions">
      <TabsNav />
      <Outlet />
    </section>
  );
};
