import React from 'react';
import classNames from 'classnames';
import {
  bool,
  string,
  oneOf,
} from 'prop-types';

const Button = ({ type, disabled, className, content, ...rest }) => {
  const props = {
    ...rest,
    type,
    disabled,
    className: classNames(
      (type ? `button-${type}` : 'button-button'),
      (disabled ? 'button-disabled' : null),
      className,
    ),
  };
  return (
    <button {...props}>
      {content}
    </button>
  );
};

Button.propTypes = {
  autoFocus: bool,
  className: string,
  content: string.isRequired,
  disabled: bool,
  formEncType: oneOf([
    'application/x-www-form-urlencoded',
    'multipart/form-data',
    'text/plain',
  ]),
  formMethod: oneOf([
    'post',
    'get',
  ]),
  formTarget: oneOf([
    '_self',
    '_blank',
    '_parent',
    '_top',
  ]),
  name: string.isRequired,
  type: oneOf([
    'submit',
    'reset',
    'button',
    'menu',
  ]),
};

Button.defaultProps = {
  autoFocus: true,
  className: '',
  disabled: false,
  formEncType: 'text/plain',
  formMethod: 'post',
  formTarget: '_self',
  type: 'submit',
};

export default Button;
