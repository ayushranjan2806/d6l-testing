import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Uncontrolled from './Uncontrolled';

// Mock console.log to prevent errors
const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
// Mock console.error to check for errors
const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

test('renders correctly', () => {
  const { container } = render(<Uncontrolled />);
  expect(container).toMatchSnapshot();
});

test('form submission', () => {
  const { getByPlaceholderText, getByText } = render(<Uncontrolled/>);

  fireEvent.change(getByPlaceholderText('username'), { target: { value: 'testuser' } });
  fireEvent.change(getByPlaceholderText('password'), { target: { value: 'testpassword' } });

  fireEvent.click(getByText('Submit'));

  // Verify console.log is called with the correct arguments
  expect(consoleSpy).toHaveBeenCalledWith('Form Submitted', { username: 'testuser', password: 'testpassword' });
  // Verify console.error is not called
  expect(errorSpy).not.toHaveBeenCalled();
});

afterEach(() => {
  // Restore mocked console methods after each test
  consoleSpy.mockRestore();
  errorSpy.mockRestore();
});

export default Uncontrolled;