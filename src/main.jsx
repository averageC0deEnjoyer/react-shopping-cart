import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import Root from './components/Root.jsx';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contacts';
import Cart from './components/Cart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
