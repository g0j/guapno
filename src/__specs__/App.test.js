import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Привыкай, что тебе завидуют/i);
  expect(linkElement).toBeInTheDocument();
});
