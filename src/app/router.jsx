import { createBrowserRouter, Navigate } from 'react-router';
import { Transactions } from '../pages/Transactions';
import { Reports } from '../pages/Reports';
import { App } from './app';
import { Dashboard } from '../pages/Dashboard';

export const router = createBrowserRouter([
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
