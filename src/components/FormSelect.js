import React from 'react';

const FormSelect = ({ title, selectList }) => {
  return (
    <>
      <label className="form__label" for="user-city">
        {title || 'Заголовок'}
      </label>
      <select
        name="userCity"
        id="user-city"
        className="form__item form__item_city"
        required
      >
        {selectList ? (
          selectList.map((item) => <option>{item.city}</option>)
        ) : (
          <option>{'значения'}</option>
        )}
      </select>
    </>
  );
};

export default FormSelect;
