import React from 'react';
import './Button.scss';
const Button = ({
  onClick,
  type,
  children,
  classSelector,
  ariaLabel,
  isEnabled = true,
}) => {
  const handleClick = (e) => {
    onClick(e);
  };
  return (
    <button
      onClick={handleClick}
      type={type}
      aria-label={children}
      className={`button ${classSelector} ${
        isEnabled ? '' : classSelector + '_disabled'
      }`}
      arial-label={ariaLabel}
      disabled={!isEnabled}
    >
      {children}
    </button>
  );
};

export default Button;
