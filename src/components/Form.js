import React, { useState, useEffect, useRef } from 'react';
import FormCheckBox from './FormCheckBox';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import cityList from '../utils/cityList';
import Button from './Button';
import './Form.scss';
import UpdateDate from './UpdateDate';

const Form = () => {
  const [city, setCity] = useState(cityList[0].city);
  const [check, setCheck] = useState(false);

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsvalid] = useState(false);

  const [currentDate, setCurrentDate] = useState('21 октября 2015 в 04:29:00');

  const form = useRef();

  useEffect(() => {
    const match = values.password === values.passwordRepeat;
    setIsvalid(form.current.checkValidity() && match);
  }, [values]);

  const handleChangeInput = (e) => {
    const target = e.target;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setErrors({
      ...errors,
      [name]: textError(value, name, target),
    });
  };

  const textError = (value, name, target) => {
    if (name === 'password' && !target.validity.valid)
      return 'Используйте не менее 5 символов';
    if (name === 'userEmail' && !target.validity.valid)
      return 'Неверный E-mail';
    if (name === 'passwordRepeat' && value !== values.password)
      return 'Пароли не совпадают';
  };

  const handleChangeSelect = (e) => {
    setCity(e.target.value);
  };

  const handleChangeCheck = () => {
    setCheck(!check);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let data =
      new Date()
        .toLocaleString('ru', {
          day: 'numeric',
          year: 'numeric',
          month: 'long',
        })
        .slice(0, -3) +
      ' в ' +
      new Date().toLocaleString('ru', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });
    toJSON();
    setCurrentDate(data);
    handleResetValue();
  };

  const handleResetValue = () => {
    setCity(cityList[0].city);
    setCheck(false);
    setValues({});
  };

  const toJSON = () => {
    const { userEmail, password } = values;
    console.log(
      JSON.stringify({ city, password, userEmail, check }, null, '\t')
    );
  };

  return (
    <form ref={form} className="form form__container">
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
          required
        />
      </fieldset>

      <fieldset className="form__fieldset form__fieldset_ctrl_password">
        <FormInput
          value={values.password}
          onChange={handleChangeInput}
          formSelector="form__input-container_ctrl_password"
          title="Пароль"
          name="password"
          label="password"
          classSelector="password"
          type="password"
          prompt="Ваш новый пароль должен содержать не менее 5 символов."
          minLength="5"
          maxLength="40"
          autoComplete="off"
          validationMessage={errors.password}
          required
        />
        <FormInput
          value={values.passwordRepeat}
          onChange={handleChangeInput}
          formSelector="form__input-container_ctrl_password"
          title="Пароль еще раз"
          name="passwordRepeat"
          label="password-repeat"
          classSelector="password"
          type="password"
          prompt="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки."
          minLength="5"
          maxLength="40"
          validationMessage={errors.passwordRepeat}
          autoComplete="off"
          required
        />
      </fieldset>

      <fieldset className="form__fieldset form__fieldset_ctrl_email">
        <FormInput
          value={values.userEmail}
          onChange={handleChangeInput}
          formSelector="form__input-container_ctrl_email"
          title="Электронная почта"
          name="userEmail"
          label="user-email"
          classSelector="email"
          type="email"
          validationMessage={errors.userEmail}
          prompt="Можно изменить адрес, указанный при регистрации."
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
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
      <div className="form__submit">
        <Button
          onClick={handleClick}
          type={'submit'}
          classSelector="form__button"
          ariaLabel="Изменить данные"
          isEnabled={isValid}
        >
          Изменить
        </Button>
        <UpdateDate date={currentDate} />
      </div>
    </form>
  );
};

export default Form;
