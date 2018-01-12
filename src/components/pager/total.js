import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { number, bool, func } from 'prop-types';

export default class Total extends Component {
  static propTypes = {
    current: number.isRequired,
    total: number.isRequired,
    delta: number,
    showFirst: bool,
    showLast: bool,
    handlePageChange: func,
  };
  static defaultProps = {
    delta: 3,
    showFirst: false,
    showLast: false,
    handlePageChange() {},
  };
  constructor(props) {
    super(props);
    const { current, total, delta, showFirst, showLast } = props;
    this.state = {
      ...this.getPager(current, total, delta, showFirst, showLast),
    };
  }
  componentWillReceiveProps = nextProps => {
    const { current, total, delta, showFirst, showLast } = nextProps;
    this.props = { ...this.props, ...nextProps };
    this.setState({
      ...this.state,
      ...this.getPager(current, total, delta, showFirst, showLast),
    });
  };
  getPager = (
    current,
    total = this.state.total,
    delta = this.state.delta,
    showFirst = this.state.showFirst,
    showLast = this.state.showLast,
  ) => {
    const left = current - delta;
    const right = current + delta + 1;
    const pager = Array.from(
      {
        length: total,
      },
      (v, k) => k + 1,
    ).filter(i => i && i >= left && i < right);

    const first = (showFirst && pager[0] > 1) || false;
    const last = (showLast && pager[pager.length - 1] < total) || false;

    return { pager, first, last, current, total, delta, showFirst, showLast };
  };
  pageTransition = currentPage =>
    this.setState(
      {
        ...this.state,
        ...this.getPager(currentPage),
      },
      () => this.props.handlePageChange(currentPage),
    );
  render() {
    return (
      <ul style={{ listStyleType: 'none' }}>
        <li style={{ display: 'inline' }}>
          <button
            disabled={this.state.current === 1}
            onClick={() => this.pageTransition(this.state.current - 1)}
          >
            &lt;
          </button>
        </li>
        {this.state.showFirst &&
          this.state.first && (
            <Fragment>
              <li style={{ display: 'inline' }} key="page-1">
                <button name={1} onClick={() => this.pageTransition(1)}>
                  {1}
                </button>
              </li>
              <li style={{ display: 'inline' }}>...</li>
            </Fragment>
          )}
        {this.state.pager.map(i => (
          <li
            key={`page-${i}`}
            style={{ display: 'inline' }}
            className={classNames({
              currentPage: i === this.state.current || false,
            })}
          >
            <button name={i} onClick={() => this.pageTransition(i)}>
              {i}
            </button>
          </li>
        ))}
        {this.state.showLast &&
          this.state.last && (
            <Fragment>
              <li style={{ display: 'inline' }}>...</li>
              <li
                style={{ display: 'inline' }}
                key={`page-${this.state.total}`}
              >
                <button
                  name={this.state.total}
                  onClick={() => this.pageTransition(this.state.total)}
                >
                  {this.state.total}
                </button>
              </li>
            </Fragment>
          )}
        <li style={{ display: 'inline' }}>
          <button
            disabled={this.state.total <= this.state.current}
            onClick={() => this.pageTransition(this.state.current + 1)}
          >
            &gt;
          </button>
        </li>
      </ul>
    );
  }
}
