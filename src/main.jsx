import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import Contact from './components/Contacts.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
