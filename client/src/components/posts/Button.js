import React from 'react';
import './Button.scss';

const Button = ({ goToForm }) => {
  return (
    <button
      className="Button"
      type="button"
      onClick={goToForm}
    >
      Create new post
    </button>
  );
}

export default Button;
