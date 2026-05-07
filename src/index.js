import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './app/router';
import './styles/main.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
