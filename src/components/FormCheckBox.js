import React from 'react';

const FormCheckBox = ({ title, name, label, classSelector, about }) => {
  return (
    <>
      <label className="form__label" htmlFor={label}>
        {title}
      </label>
      <input
        id={label}
        name={name}
        className={classSelector}
        type="checkbox"
        required
      ></input>
      <label className="form__label" htmlFor={label}>
        {about}
      </label>
    </>
  );
};

export default FormCheckBox;
