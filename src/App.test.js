import { render, screen } from '@testing-library/react';
import HomePage from './pages/HomePage';

test('renders the home page title', () => {
  render(<HomePage />);
  const titleElement = screen.getByText(/Alora Petals/i);
  expect(titleElement).toBeInTheDocument();
});

