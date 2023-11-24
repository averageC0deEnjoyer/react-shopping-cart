import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import Root from './routes/Root.jsx';
import ErrorPage from './components/Error-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Root /> },
  {
    path: '/:name',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
