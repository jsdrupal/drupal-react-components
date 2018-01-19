import React from 'react';
import {
  arrayOf,
  objectOf,
  oneOfType,
  string,
  number,
  shape,
} from 'prop-types';

const TableHeader = ({ headers }) => (
  <thead>
    <tr>{headers.map(data => <th key={data.key}>{data.title}</th>)}</tr>
  </thead>
);

const TableRows = ({ rows }) => (
  <tbody>
    {rows.map(row => {
      const { key, ...data } = row;
      return (
        <tr key={`row-${key}`}>
          {Object.keys({ ...data }).map(rowKey => (
            <td key={`row-${key}-${rowKey}`}>{row[rowKey]}</td>
          ))}
        </tr>
      );
    })}
  </tbody>
);

TableHeader.propTypes = {
  headers: arrayOf(
    shape({
      title: string.isRequired,
      key: string.isRequired,
    }),
  ).isRequired,
};

TableRows.propTypes = {
  rows: arrayOf(objectOf(oneOfType([string, number]))).isRequired,
};

export { TableHeader, TableRows };
