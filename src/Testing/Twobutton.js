import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button onClick={onClick} data-testid={`${label}-button`}>
        {label}
      </button>
    </div>
  );
};

export default Button;
