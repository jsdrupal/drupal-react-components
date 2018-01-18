import React, { Component } from 'react';
import {
  arrayOf,
  objectOf,
  oneOfType,
  string,
  number,
  shape,
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
  };
  static defaultProps = {
    classnames: '',
  };
  constructor(props) {
    super(props);
    const { rows, headers } = props;
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
  sort = (key, direction) => {
    const headers = this.state.headers.map(
      header =>
        header.key === key
          ? {
              ...header,
              sortDirection: (direction === 'desc' && 'asc') || 'desc',
            }
          : header,
    );
    const rows = this.state.rows.sort(
      (a, b) => (direction === 'asc' ? a[key] > b[key] : a[key] < b[key]),
    );
    this.setState(prevState => ({ ...prevState, headers, rows }));
  };
  render() {
    return (
      <table className={classNames('table-sortable', this.props.classnames)}>
        <thead>
          <tr>
            {this.state.headers.map(data => (
              <th key={`${data.key}-${data.sortDirection}`}>
                <span
                  className={`${data.key} ${data.sortDirection}`}
                  onKeyPress={() => this.sort(data.key, data.sortDirection)}
                  onClick={() => this.sort(data.key, data.sortDirection)}
                  tabIndex={0}
                  role="button"
                >
                  {data.title}
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
