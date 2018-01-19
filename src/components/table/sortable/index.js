import React, { Component } from 'react';
import {
  arrayOf,
  objectOf,
  oneOfType,
  string,
  number,
  shape,
  func,
} from 'prop-types';
import classNames from 'classnames';

import { TableRows } from '../helpers';

const TableSortable = class TableSortable extends Component {
  static propTypes = {
    headers: arrayOf(
      shape({
        title: string.isRequired,
        key: string.isRequired,
      }),
    ).isRequired,
    rows: arrayOf(objectOf(oneOfType([string, number]))).isRequired,
    classnames: string,
    sortHandler: func,
  };
  static defaultProps = {
    classnames: '',
    sortHandler: null,
  };
  constructor(props) {
    super(props);
    const { rows, headers, sortHandler } = props;
    this.sort =
      sortHandler && sortHandler instanceof Function ? sortHandler : this.sort;
    this.state = {
      rows,
      headers: headers.map(header => ({ ...header, sortDirection: 'asc' })),
    };
  }
  componentWillReceiveProps(nextProps) {
    const { rows, headers } = nextProps;
    this.setState({
      rows,
      headers: headers.map(header => ({
        sortDirection: this.state.headers.filter(
          stateHeader => stateHeader.key === header.header,
        )[0].sortDirection,
        ...header,
      })),
    });
  }
  sort = ({ key, sortDirection }) => {
    const headers = this.state.headers.map(
      header =>
        header.key === key
          ? {
              ...header,
              sortDirection: (sortDirection === 'desc' && 'asc') || 'desc',
            }
          : header,
    );
    const rows = this.state.rows.sort(
      (a, b) => (sortDirection === 'asc' ? a[key] > b[key] : a[key] < b[key]),
    );
    this.setState(prevState => ({ ...prevState, headers, rows }));
  };
  render() {
    return (
      <table className={classNames('table-sortable', this.props.classnames)}>
        <thead>
          <tr>
            {this.state.headers.map(({ key, sortDirection, title }) => (
              <th key={`${key}-${sortDirection}`}>
                <span
                  className={`${key} ${sortDirection}`}
                  onKeyPress={() => this.sort({ key, sortDirection })}
                  onClick={() => this.sort({ key, sortDirection })}
                  tabIndex={0}
                  role="button"
                >
                  {title}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <TableRows rows={this.state.rows} />
      </table>
    );
  }
};

export default TableSortable;
