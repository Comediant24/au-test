import React from 'react';

const FormSelect = ({
  formSelector,
  title,
  name,
  label,
  classSelector,
  selectList,
  prompt,
}) => {
  return (
    <div className={`form__input-container ${formSelector}`}>
      <label className="form__label" htmlFor={label}>
        {title || 'Заголовок'}
      </label>
      <div className="form__select-wrapper">
        <select
          name={name}
          id={label}
          className={`form__item ${classSelector}`}
          required
        >
          {selectList ? (
            selectList.map((item, index) => (
              <option key={index}>{item.city}</option>
            ))
          ) : (
            <option>{'значения'}</option>
          )}
        </select>
      </div>
      <p className="form__item-prompt">{prompt || ''}</p>
    </div>
  );
};

export default FormSelect;
