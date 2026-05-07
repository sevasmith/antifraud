import { Outlet } from 'react-router';

export const App = () => {
  return (
    <div className="app-container">
      <header>
        <h2>ANTIFRAUD</h2>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
