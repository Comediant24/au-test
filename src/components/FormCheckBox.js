import React from 'react';

const FormCheckBox = ({
  formSelector,
  title,
  name,
  label,
  classSelector,
  about,
}) => {
  return (
    <div className={`form__input-container ${formSelector}`}>
      <label className="form__label" htmlFor={label}>
        {title || ''}
      </label>
      <div className="form__item-wrapper">
        <input
          id={label}
          name={name}
          className={`form__item form__item_${classSelector}`}
          type="checkbox"
        ></input>
        <label className="form__label form__checkbox-about" htmlFor={label}>
          {about}
        </label>
        <span class="visible-checkbox"></span>
      </div>
    </div>
  );
};

export default FormCheckBox;
