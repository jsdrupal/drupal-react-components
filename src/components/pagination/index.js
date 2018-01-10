import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { number, bool } from 'prop-types';

export default class Pagination extends Component {
  static propTypes = {
    current: number.isRequired,
    total: number.isRequired,
    delta: number,
    showFirst: bool,
    showLast: bool,
  };
  static defaultProps = {
    delta: 3,
    showFirst: false,
    showLast: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      ...this.getPager(this.props.current, this.props.total),
    };
  }
  componentWillReceiveProps = nextProps => {
    this.setState({
      ...this.state,
      ...nextProps,
      ...this.getPager(nextProps.current, nextProps.total),
    });
  };
  getPager = (current, total) => {
    const left = current - this.props.delta;
    const right = current + this.props.delta + 1;
    const pager = Array.from(
      {
        length: total,
      },
      (v, k) => k + 1,
    ).filter(i => i && i >= left && i < right);

    const first = (this.props.showFirst && pager[0] > 1) || false;
    const last =
      (this.props.showLast && pager[pager.length - 1] < total) || false;

    return { pager, first, last };
  };
  getPrevious = () => {
    const current = this.state.current - 1;
    this.setState({
      ...this.state,
      current,
      ...this.getPager(current, this.state.total),
    });
  };
  getNext = () => {
    const current = this.state.current + 1;
    this.setState({
      ...this.state,
      current,
      ...this.getPager(current, this.state.total),
    });
  };
  getPage = current => {
    this.setState({
      ...this.state,
      current,
      ...this.getPager(current, this.state.total),
    });
  };
  render() {
    return (
      <ul style={{ listStyleType: 'none' }}>
        <li style={{ display: 'inline' }}>
          <button
            disabled={this.state.current === 1}
            onClick={this.getPrevious}
          >
            &lt;
          </button>
        </li>
        {this.state.showFirst &&
          this.state.first && (
            <Fragment>
              <li style={{ display: 'inline' }}>
                <button name={1} onClick={() => this.getPage(1)}>
                  {1}
                </button>
              </li>
              <li style={{ display: 'inline' }}>...</li>
            </Fragment>
          )}
        {this.state.pager.map(i => (
          <li
            style={{ display: 'inline' }}
            className={classNames({
              currentPage: i === this.state.current || false,
            })}
          >
            <button name={i} onClick={() => this.getPage(i)}>
              {i}
            </button>
          </li>
        ))}
        {this.state.showLast &&
          this.state.last && (
            <Fragment>
              <li style={{ display: 'inline' }}>...</li>
              <li style={{ display: 'inline' }}>
                <button
                  name={this.state.total}
                  onClick={() => this.getPage(this.state.total)}
                >
                  {this.state.total}
                </button>
              </li>
            </Fragment>
          )}
        <li style={{ display: 'inline' }}>
          <button
            disabled={this.state.total <= this.state.current}
            onClick={this.getNext}
          >
            &gt;
          </button>
        </li>
      </ul>
    );
  }
}
