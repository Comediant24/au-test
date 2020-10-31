import React from 'react';
import FormCheckBox from './FormCheckBox';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import cityList from '../utils/cityList';
import Button from './Button';
import './Form.scss';

const Form = () => {
  return (
    <form className="form form__container">
      <fieldset className="form__fieldset form__fieldset_ctrl_city">
        <FormSelect
          formSelector="form__input-container_ctrl_city"
          title="Ваш город"
          name="userCity"
          label="user-city"
          classSelector="form__item_city"
          selectList={cityList}
        />
      </fieldset>

      <fieldset className="form__fieldset form__fieldset_ctrl_password">
        <FormInput
          formSelector="form__input-container_ctrl_password"
          title="Пароль"
          name="password"
          label="password"
          classSelector="password"
          type="password"
          prompt="Ваш новый пароль должен содержать не менее 5 символов."
        />
        <FormInput
          formSelector="form__input-container_ctrl_password"
          title="Пароль еще раз"
          name="passwordRepeat"
          label="password-repeat"
          classSelector="password"
          type="password"
          prompt="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки."
        />
      </fieldset>

      <fieldset className="form__fieldset form__fieldset_ctrl_email">
        <FormInput
          formSelector="form__input-container_ctrl_email"
          title="Электронная почта"
          name="userEmail"
          label="user-email"
          classSelector="email"
          type="email"
          prompt="Можно изменить адрес, указанный при регистрации."
        />

        <FormCheckBox
          formSelector="form__input-container_ctrl_email-check"
          title="Я согласен"
          name="userAgreement"
          label="user-agreement"
          classSelector="agreement"
          about="принимать актуальную информацию на емейл"
        />
      </fieldset>
      <Button classSelector="form__button">Изменить</Button>
    </form>
  );
};

export default Form;
