import React from 'react';

const FormInput = ({
  value,
  onChange,
  formSelector,
  title,
  name,
  label,
  classSelector,
  type,
  prompt,
}) => {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <div className={`form__input-container ${formSelector}`}>
      <label className="form__label" htmlFor={label}>
        {title || 'Заголовок'}
      </label>
      <input
        value={value}
        onChange={handleChange}
        id={label}
        name={name}
        className={`form__item form__item_${classSelector}`}
        type={type}
        required
      ></input>
      <p className="form__item-prompt">{prompt || ''}</p>
    </div>
  );
};

export default FormInput;
