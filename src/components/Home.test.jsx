import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('home component', () => {
  test('home component renders', () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole('link', { name: /^go to products page/i })
    ).toBeInTheDocument();
  });
});
