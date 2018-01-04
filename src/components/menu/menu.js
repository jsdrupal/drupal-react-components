import React from 'react';
import classNames from 'classnames';
import { string, arrayOf, element } from 'prop-types';

const Menu = ({ className, children }) => (
  <div className={classNames(className, 'menu')}>
    <ul>{children}</ul>
  </div>
);

Menu.propTypes = {
  className: string,
  children: arrayOf(element).isRequired,
};

Menu.defaultProps = {
  className: '',
};

export default Menu;
