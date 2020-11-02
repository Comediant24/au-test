import React from 'react';

const FormInput = ({
  onChange,
  value,
  formSelector,
  title,
  label,
  classSelector,
  prompt,
  validationMessage,
  name,
  ...rest
}) => {
  return (
    <div className={`form__input-container ${formSelector}`}>
      <label className="form__label" htmlFor={label}>
        {title || 'Заголовок '}
      </label>
      <input
        value={value || ''}
        onChange={onChange}
        id={label}
        name={name}
        className={`form__item form__item_${classSelector}`}
        {...rest}
      ></input>
      <p className="form__item-prompt">{prompt || ''}</p>
      <span className="form__input-error form__input-error_visible">
        {validationMessage}
      </span>
    </div>
  );
};

export default FormInput;
