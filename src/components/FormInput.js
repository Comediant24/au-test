import React from 'react';

const FormInput = ({ title, name, label, classSelector, type }) => {
  return (
    <>
      <label className="form__label" htmlFor={label}>
        {title}
      </label>
      <input
        id={label}
        name={name}
        className={`form__item form__item_${classSelector}`}
        type={type}
        required
      ></input>
    </>
  );
};

export default FormInput;
