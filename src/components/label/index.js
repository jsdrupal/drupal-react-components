import React from 'react';
import classNames from 'classnames';
import { string, oneOfType, arrayOf, node } from 'prop-types';

const Label = ({ className, htmlFor, children, text }) => (
  <label htmlFor={htmlFor} className={classNames('form-label', className)}>
    <span>{text}</span>
    {children}
  </label>
);

Label.propTypes = {
  className: string,
  htmlFor: string,
  text: string,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

Label.defaultProps = {
  className: '',
  htmlFor: '',
  text: '',
};

export default Label;
