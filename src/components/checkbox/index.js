import React from 'react';
import classNames from 'classnames';

import {
  string,
  bool,
} from 'prop-types';

const Checkbox = (props) => {
  const {
    className,
    label,
    title,
    disabled,
    ...rest
  } = props;

  const appliedClasses = classNames(
    'checkbox',
    {
      'checkbox-disabled': disabled,
    },
    props.className,
  );

  return (
    <label className={appliedClasses}>
      { label && <span className="checkbox-label">{label}</span> }
      <input type="checkbox" className="checkbox-input" disabled={disabled} {...rest} />
    </label>

  );
};

Checkbox.propTypes = {
  className: string,
  disabled: bool,
  label: string,
  title: string,
};

Checkbox.defaultProps = {
  className: '',
  disabled: false,
  label: false,
  title: false,
};

export default Checkbox;
