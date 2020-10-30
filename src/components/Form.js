import React from 'react';
import FormSelect from './FormSelect';

const Form = () => {
  return (
    <form className="form form__container">
      <fieldset className="form__input-container form__input-container_ctrl_city">
        <FormSelect title="Ваш город" />
      </fieldset>

      <fieldset className="form__input-container form__input-container_ctrl_password">
        <label className="form__label" for="password">
          Пароль
        </label>
        <input
          id="password"
          name="password"
          className="form__item form__item_password"
          type="password"
          required
        ></input>
        <label className="form__label" for="password-repeat">
          Пароль еще раз
        </label>
        <input
          id="password-repeat"
          name="passeordRepeat"
          className="form__item form__item_password"
          type="password"
          required
        ></input>
      </fieldset>

      <fieldset className="form__input-container form__input-container_ctrl_email">
        <label className="form__label" for="user-email">
          Электронная почта
        </label>
        <input
          id="user-email"
          name="userEmail"
          className="form__item form__item_email"
          type="email"
          required
        ></input>
      </fieldset>

      <fieldset className="form__input-container form__input-container_ctrl_agreement">
        <label className="form__label" for="user-agreement">
          Я согласен
        </label>
        <input
          id="user-agreement"
          name="userAgreement"
          className="form__item form__item_agreement"
          type="checkbox"
          required
        ></input>
        <label className="form__label" for="user-agreement">
          принимать актуальную информацию на емейл
        </label>
      </fieldset>

      <button className="form__button">Изменить</button>
    </form>
  );
};

export default Form;
