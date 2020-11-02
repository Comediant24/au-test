import React from 'react';

const FormInputValidator = ({ isShow, validationMessage }) => {
  React.useEffect(() => {}, []);
  return (
    <span className="form__input-error form__input-error_visible">
      {validationMessage}
    </span>
  );
};

export default FormInputValidator;
