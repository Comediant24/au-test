import React from 'react';
import Button from './Button';
import './Wellcome.scss';

const Wellcome = ({ classSelector, user }) => {
  return (
    <div className={`${classSelector} wellcome`}>
      <h1 className="wellcome__user-title">
        Здравствуйте, <span className="wellcome__user-current">{user}</span>
      </h1>
      <Button classSelector="wellcome__button">Сменить статус</Button>
      <div className="wellcome__status">
        <p className="wellcome__status-text">
          Прежде чем действовать, надо понять
        </p>
        <input
          name="status"
          type="text"
          className="wellcome__status-input wellcome__status-input_display_hidden"
        ></input>
        <div className="wellcome__square-status"></div>
      </div>
    </div>
  );
};

export default Wellcome;
