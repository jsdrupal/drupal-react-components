import React, { Children, cloneElement } from 'react';
import classNames from 'classnames';
import { string, arrayOf, element } from 'prop-types';

const Breadcrumb = ({ className, separator, children }) => (
  <div className={classNames(className, 'breadcrumb')}>
    {Children.map(children, (crumbs, index) =>
      cloneElement(crumbs, { separator, key: index }),
    )}
  </div>
);

Breadcrumb.propTypes = {
  className: string,
  children: arrayOf(element).isRequired,
  separator: string,
};

Breadcrumb.defaultProps = {
  className: '',
  separator: '/',
};

const BreadcrumbItem = ({ children, href, separator, ...restProps }) => {
  let link;
  if (href) {
    link = (
      <a href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    link = <span {...restProps}>{children}</span>;
  }
  if (children) {
    return (
      <span>
        {link}
        <span>{separator}</span>
      </span>
    );
  }
  return null;
};

BreadcrumbItem.propTypes = {
  children: arrayOf(element).isRequired,
  href: string,
  separator: string,
};

BreadcrumbItem.defaultProps = {
  href: false,
  separator: '/',
};

export { Breadcrumb, BreadcrumbItem };
