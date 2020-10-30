import React from 'react';

const Button = (props, { classSelector }) => {
  return (
    <button
      type="button"
      aria-label={props.children}
      className={`button ${classSelector}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
