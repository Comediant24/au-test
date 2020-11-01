import React from 'react';

const FormCheckBox = ({
  onChange,
  formSelector,
  title,
  name,
  label,
  classSelector,
  about,
}) => {
  return (
    <div className={`form__input-container ${formSelector}`}>
      <label onClick={onChange} className="form__label" htmlFor={label}>
        {title || ''}
      </label>
      <div className="form__item-wrapper">
        <input
          id={label}
          name={name}
          className={`form__item form__item_${classSelector}`}
          type="checkbox"
        ></input>
        <label
          onClick={onChange}
          className="form__label form__checkbox-about"
          htmlFor={label}
        >
          {about}
        </label>
      </div>
    </div>
  );
};

export default FormCheckBox;
