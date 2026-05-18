import { Outlet } from 'react-router';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { useState } from 'react';
import './App.scss';

export const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <main className="main-container">
        <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
        <Outlet />
      </main>
    </div>
  );
};
