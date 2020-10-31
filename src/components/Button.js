import React from 'react';
import './Button.scss';
const Button = (props) => {
  return (
    <button
      type="button"
      aria-label={props.children}
      className={`button ${props.classSelector}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
