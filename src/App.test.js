import { render } from '@testing-library/react';
import App from './App';

test('renders correctly', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  expect(getByPlaceholderText(/insira o primeiro número/i)).toBeInTheDocument()
  expect(getByPlaceholderText(/insira o segundo número/i)).toBeInTheDocument()
  expect(getByText(/somar/i)).toBeInTheDocument()
});
