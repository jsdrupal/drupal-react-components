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

import { TableHeader, TableRows } from './components';

const SimpleTable = ({ header, rows, classnames }) => (
  <table className={classNames('table-simple', classnames)}>
    <TableHeader {...{ header }} />
    <TableRows {...{ rows }} />
  </table>
);

SimpleTable.propTypes = {
  header: arrayOf(
    shape({
      title: string.isRequired,
      key: string.isRequired,
    }),
  ).isRequired,
  rows: arrayOf(objectOf(oneOfType([string, number]))).isRequired,
  classnames: string,
};

SimpleTable.defaultProps = {
  classnames: '',
};

export default SimpleTable;
