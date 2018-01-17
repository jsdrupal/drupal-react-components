import React from 'react';

import PropTypes from 'prop-types';
import TableHeader from './tableHeader';

const renderCell = cell => <td>{cell}</td>;

const renderRow = (header, row) => (
  <tr>{Object.keys(header).map(headerKey => renderCell(row[headerKey]))}</tr>
);

// @todo Implement it
const SortableTable = props => {
  const header = props.headerEntries;
  return (
    <table>
      <TableHeader {...props} />
      <tbody>{props.rows.map(row => renderRow(header, row))}</tbody>
    </table>
  );
};

export default { SimpleTable, SortableTable };
