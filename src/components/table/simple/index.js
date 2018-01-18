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

const TableSimple = ({ header, rows, classnames }) => (
  <table className={classNames('table-simple', classnames)}>
    <TableHeader {...{ header }} />
    <TableRows {...{ rows }} />
  </table>
);

TableSimple.propTypes = {
  header: arrayOf(
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
