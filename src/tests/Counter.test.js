// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  <Counter/>
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const initialCount = screen.getByTestId('count');
  const initialCountInt = parseInt(initialCount.textContent) + 3;
  const expected = initialCountInt.toString();
  const plusButton = screen.getByText('+');
  fireEvent.click(plusButton);
  fireEvent.click(plusButton);
  fireEvent.click(plusButton);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent(expected);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const initialCount = screen.getByTestId('count');
  const initialCountInt = parseInt(initialCount.textContent) + 3;
  const expected = initialCountInt.toString();
  const minusButton = screen.getByText('-');
  fireEvent.click(minusButton);
  fireEvent.click(minusButton);
  fireEvent.click(minusButton);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent(expected);
});
