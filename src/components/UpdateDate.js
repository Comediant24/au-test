import React from 'react';

const UpdateDate = ({ date }) => {
  return (
    <div className="form__save-info">
      <p className="form__save-date">{`последние изменения ${date}`}</p>
    </div>
  );
};

export default UpdateDate;
