import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders the  button number 1  with the correct label and calls the function when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button label="Click me" onClick={onClickMock} />);
    const buttonElement = screen.getByText('Click me');

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders the  button number 2 with the correct label the button for the second time  and calls the function when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button label="Submit" onClick={onClickMock} />);
    const buttonElement = screen.getByText('Submit');

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
