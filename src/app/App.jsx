import { Outlet } from 'react-router';
import { Header } from '../components/Header/Header';

export const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
