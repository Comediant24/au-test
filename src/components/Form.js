import React, { useState } from 'react';
import FormCheckBox from './FormCheckBox';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import cityList from '../utils/cityList';
import Button from './Button';
import './Form.scss';

const Form = () => {
  const [city, setCity] = useState(cityList[0].city);
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false);

  const handleChangeInput = (e) => {
    const value = e.target.value;
    switch (e.target.name) {
      case 'password':
        setPass(value);
        break;
      case 'passwordRepeat':
        setRepeatPass(value);
        break;
      case 'userEmail':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleChangeSelect = (e) => {
    setCity(e.target.value);
  };

  const handleChangeCheck = () => {
    setCheck(!check);
  };

  const handleClick = (e) => {
    e.preventDefault();
    toJSON();
    handleResetValue();
  };

  const handleResetValue = () => {
    setCity(cityList[0].city);
    setPass('');
    setRepeatPass('');
    setEmail('');
    setCheck(false);
  };

  const toJSON = () => {
    console.log(
      JSON.stringify(
        { city: city, password: pass, email: email, mailing: check },
        null,
        '\t'
      )
    );
  };

  return (
    <form className="form form__container">
      <fieldset className="form__fieldset form__fieldset_ctrl_city">
        <FormSelect
          value={city}
          onChange={handleChangeSelect}
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
          value={pass}
          onChange={handleChangeInput}
          formSelector="form__input-container_ctrl_password"
          title="Пароль"
          name="password"
          label="password"
          classSelector="password"
          type="password"
          prompt="Ваш новый пароль должен содержать не менее 5 символов."
        />
        <FormInput
          value={repeatPass}
          onChange={handleChangeInput}
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
          value={email}
          onChange={handleChangeInput}
          formSelector="form__input-container_ctrl_email"
          title="Электронная почта"
          name="userEmail"
          label="user-email"
          classSelector="email"
          type="email"
          prompt="Можно изменить адрес, указанный при регистрации."
        />

        <FormCheckBox
          value={check}
          onChange={handleChangeCheck}
          formSelector="form__input-container_ctrl_email-check"
          title="Я согласен"
          name="userAgreement"
          label="user-agreement"
          classSelector="agreement"
          about="принимать актуальную информацию на емейл"
        />
      </fieldset>
      <Button
        onClick={handleClick}
        type={'submit'}
        classSelector="form__button"
      >
        Изменить
      </Button>
    </form>
  );
};

export default Form;
