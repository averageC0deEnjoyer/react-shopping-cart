import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Home from './Home';
import Products from './Products';
import Contact from './Contacts';

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

describe('test Root render and router implementation', () => {
  test('have every navigation link', () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByRole('link', { name: /fakeshop/i })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /^products/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: /^go to products page/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId('shopping-cart')).toBeInTheDocument();
  });

  test('test navigation logic (maybe this one integration test)?', async () => {
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();

    expect(
      screen.getByRole('heading', { name: /landing page/i })
    ).toBeInTheDocument();

    //test fakeshop link
    await user.click(
      screen.getByRole('link', {
        name: /fakeshop/i,
      })
    );

    expect(
      screen.getByRole('heading', { name: /landing page/i })
    ).toBeInTheDocument();

    //test home link
    await user.click(
      screen.getByRole('link', {
        name: /home/i,
      })
    );

    expect(
      screen.getByRole('heading', { name: /landing page/i })
    ).toBeInTheDocument();

    //test products nav link
    await user.click(
      screen.getByRole('link', {
        name: /^products/i,
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /products page/i,
      })
    ).toBeInTheDocument();

    //test contact link
    await user.click(
      screen.getByRole('link', {
        name: /contact/i,
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /contact page/i,
      })
    ).toBeInTheDocument();

    //back to home then click product
    await user.click(
      screen.getByRole('link', {
        name: /fakeshop/i,
      })
    );

    await user.click(
      screen.getByRole('link', {
        name: /^go to products page/i,
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /products page/i,
      })
    ).toBeInTheDocument();
  });
});
