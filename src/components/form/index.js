import React from 'react';
import classNames from 'classnames';
import { string, oneOfType, arrayOf, node, func } from 'prop-types';

const Form = ({ className, onSubmit, children }) => {
  const appliedClasses = classNames('form', className);
  return (
    <form className={appliedClasses} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  className: string,
  children: oneOfType([arrayOf(node), node]),
  onSubmit: func.isRequired,
};

Form.defaultProps = {
  className: '',
  children: '',
};

export default Form;
