import { Outlet } from 'react-router';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import './App.scss';

export const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className='main-container'>
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
};
