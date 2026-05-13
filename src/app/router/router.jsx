import { createBrowserRouter, Navigate } from 'react-router';
import { Transactions } from '../../pages/Transactions';
import { Reports } from '../../pages/Reports';
import { App } from '../ui/App';
import { Dashboard } from '../../pages/Dashboard/Dashboard';
import { Register } from '../../pages/Register/Register';
import { Login } from '../../pages/Login/Login';

export const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/reports',
        element: <Reports />,
      },
      {
        path: '/transactions',
        element: <Transactions />,
      },
    ],
  },
]);
