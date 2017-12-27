import React from 'react';
import { oneOfType, arrayOf, node, string } from 'prop-types';

const Card = ({ title, children }) => (
  <div className="card">
    {title ? <h1 className="card-title">{title}</h1> : ''}
    <div className="card-children">{children}</div>
  </div>
);

Card.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  title: string,
};

Card.defaultProps = {
  children: '',
  title: '',
};

export default Card;
