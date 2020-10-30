import React from 'react';

const Wellcome = ({ classSelector, user }) => {
  return (
    <div className={`${classSelector} wellcome`}>
      <div className="wellcome__title">
        <h1 className="wellcome__user-title">
          Здравствуйте, <span className="wellcome__user-current">{user}</span>
        </h1>
        <button className="button wellcome__button">Сменить статус</button>
      </div>
      <div className="wellcome__status">
        <p className="wellcome__status-text">
          Прежде чем действовать, надо понять
        </p>
        <input
          name="status"
          type="text"
          className="wellcome__status-input"
        ></input>
      </div>
    </div>
  );
};

export default Wellcome;
