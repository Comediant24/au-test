import React from 'react';
import FormCheckBox from './FormCheckBox';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

const Form = () => {
  return (
    <form className="form form__container">
      <fieldset className="form__input-container form__input-container_ctrl_city">
        <FormSelect title="Ваш город" />
      </fieldset>

      <fieldset className="form__input-container form__input-container_ctrl_password">
        <FormInput
          title="Пароль"
          name="password"
          label="password"
          classSelector="password"
          type="password"
        />
        <FormInput
          title="Пароль еще раз"
          name="passwordRepeat"
          label="password-repeat"
          classSelector="password"
          type="password"
        />
      </fieldset>

      <fieldset className="form__input-container form__input-container_ctrl_email">
        <FormInput
          title="Электронная почта"
          name="userEmail"
          label="user-email"
          classSelector="email"
          type="email"
        />
      </fieldset>

      <fieldset className="form__input-container form__input-container_ctrl_agreement">
        <FormCheckBox
          title="Я согласен"
          name="userAgreement"
          label="user-agreement"
          classSelector="agreement"
          about="принимать актуальную информацию на емейл"
        />
      </fieldset>

      <button className="form__button">Изменить</button>
    </form>
  );
};

export default Form;
