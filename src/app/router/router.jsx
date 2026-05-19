import { createBrowserRouter, Navigate } from 'react-router';
import { Transactions } from '../../pages/Transactions/Transactions';
import { Reports } from '../../pages/Repotrs/Reports';
import { App } from '../ui/App';
import { Dashboard } from '../../pages/Dashboard/Dashboard';
import { Register } from '../../pages/Register/Register';
import { Login } from '../../pages/Login/Login';
import { Deposit } from '../../pages/Transactions/Deposit/Deposit';
import { Clients } from '../../pages/Transactions/Clients/Clients';
import { Withdraw } from '../../pages/Transactions/Withdraw/Withdraw';
import { Loans } from '../../pages/Transactions/Loans/Loans';
import { TransactionHistory } from '../../pages/Transactions/Transaction History/TransactionHistory';

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
        children: [
          {
            index: true,
            element: <Navigate to="clients" replace />,
          },
          {
            path: 'clients',
            element: <Clients />,
          },
          {
            path: 'deposit',
            element: <Deposit />,
          },
          {
            path: 'withdraw',
            element: <Withdraw />,
          },
          {
            path: 'loans',
            element: <Loans />,
          },
          {
            path: 'history',
            element: <TransactionHistory />,
          },
        ],
      },
    ],
  },
]);
