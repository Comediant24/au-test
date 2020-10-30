import './App.scss';

function App() {
  return (
    <div className="app">
      <h1 className="title">
        Здравствуйте, Человек №{Math.floor(Math.random() * 1000)}
      </h1>
      <form className="form form__container">
        <fieldset className="form__input-container form__input-container_ctrl_city">
          <label className="form__label" for="user-city">
            Ваш город
          </label>
          <select
            name="userCity"
            id="user-city"
            className="form__item form__item_city"
            required
          >
            <option value="krsk">Красноярск</option>
            <option value="omsk">Омск</option>
            <option value="other">Другой город</option>
          </select>
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
    </div>
  );
}

export default App;
