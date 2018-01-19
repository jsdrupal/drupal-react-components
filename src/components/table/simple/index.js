import React from 'react';
import {
  arrayOf,
  objectOf,
  oneOfType,
  number,
  string,
  shape,
} from 'prop-types';
import classNames from 'classnames';

import { TableHeader, TableRows } from '../helpers';

const TableSimple = ({ headers, rows, classnames }) => (
  <table className={classNames('table-simple', classnames)}>
    <TableHeader {...{ headers }} />
    <TableRows {...{ rows }} />
  </table>
);

TableSimple.propTypes = {
  headers: arrayOf(
    shape({
      title: string.isRequired,
      key: string.isRequired,
    }),
  ).isRequired,
  rows: arrayOf(objectOf(oneOfType([string, number]))).isRequired,
  classnames: string,
};

TableSimple.defaultProps = {
  classnames: '',
};

export default TableSimple;
