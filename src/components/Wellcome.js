import React, { useState } from 'react';
import Button from './Button';
import './Wellcome.scss';

const Wellcome = ({ classSelector, user }) => {
  const [status, setStatus] = useState('Прежде чем действовать, надо понять');
  const [isShow, setIsShow] = useState(false);
  const [buttonTitle, setButtonTitle] = useState('Сменить статус');

  const handleClick = (e) => {
    setIsShow(!isShow);
    setButtonTitle(isShow ? 'Изменить статус' : 'Сохранить');
  };

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className={`${classSelector} wellcome`}>
      <h1 className="wellcome__user-title">
        Здравствуйте, <span className="wellcome__user-current">{user}</span>
      </h1>
      <Button
        onClick={handleClick}
        disabled="false"
        classSelector="wellcome__button"
      >
        {buttonTitle}
      </Button>
      <div className="wellcome__status">
        {isShow ? (
          <input
            autoFocus
            maxLength="120"
            value={status}
            onChange={handleChange}
            name="status"
            type="text"
            className={`wellcome__status-input wellcome__status-text${
              isShow ? '' : 'wellcome__status-input_display_hidden'
            }`}
          ></input>
        ) : (
          <p className="wellcome__status-text"> {status || 'Ваш статус'}</p>
        )}

        <div className="wellcome__square-status"></div>
      </div>
    </div>
  );
};

export default Wellcome;
