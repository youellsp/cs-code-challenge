import { render, screen } from '@testing-library/react';
import App from './App';


test('renders CS Code Challenge header', () => {
  render(<App />);
  const linkElement = screen.getByText(/CS Code Challenge/i);
  expect(linkElement).toBeInTheDocument();
});
