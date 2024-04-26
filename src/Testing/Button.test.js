import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders  the button on click me for the one test', () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the function when button clicked', () => {
    const onClickMock = jest.fn();
    render(<Button label="Click me" onClick={onClickMock} />);
    const buttonElement = screen.getByText('Click me');

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
