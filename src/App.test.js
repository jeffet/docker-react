import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Changed My Text/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link2', () => {
  render(<App />);
  const linkElement = screen.getByText(/for Travis/i);
  expect(linkElement).toBeInTheDocument();
});
