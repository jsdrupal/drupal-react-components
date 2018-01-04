import React, { Children, cloneElement } from 'react';
import classNames from 'classnames';
import { string, arrayOf, element, bool } from 'prop-types';

import MenuItem from './menuitem';

const MenuGroup = ({ className, children, disabled }) => (
  <MenuItem>
    <ul
      className={classNames(className, 'menu-group', {
        'menu-group-disabled': disabled,
      })}
    >
      {Children.map(children, (menuitem, index) =>
        cloneElement(menuitem, { disabled, key: index }),
      )}
    </ul>
  </MenuItem>
);

MenuGroup.propTypes = {
  className: string,
  children: arrayOf(element).isRequired,
  disabled: bool,
};

MenuGroup.defaultProps = {
  className: '',
  disabled: false,
};

export default MenuGroup;
