import React from 'react';
import './Button.scss';
const Button = (props) => {
  const handleClick = (e) => {
    props.onClick(e);
  };
  return (
    <button
      onClick={handleClick}
      type={props.type}
      aria-label={props.children}
      className={`button ${props.classSelector} ${
        props.isEnabled ? '' : props.classSelector + '_disabled'
      }`}
      arial-label={props.ariaLabel}
      disabled={!props.isEnabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
