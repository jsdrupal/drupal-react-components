import React from 'react';
import classNames from 'classnames';
import { string, arrayOf, element, bool } from 'prop-types';

const MenuItem = ({ className, children, disabled }) => (
  <li
    className={classNames(className, 'menu-item', {
      'menu-item-disabled': disabled,
    })}
    style={disabled ? { pointerEvents: 'none', opacity: 0.6 } : {}}
  >
    {children}
  </li>
);

MenuItem.propTypes = {
  className: string,
  children: arrayOf(element).isRequired,
  disabled: bool,
};

MenuItem.defaultProps = {
  className: '',
  disabled: false,
};

export default MenuItem;
