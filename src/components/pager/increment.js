import React, { Component } from 'react';
import classNames from 'classnames';
import { number, func } from 'prop-types';

export default class Increment extends Component {
  static propTypes = {
    current: number.isRequired,
    delta: number.isRequired,
    handlePageChange: func,
  };
  static defaultProps = {
    handlePageChange() {},
  };
  constructor(props) {
    super(props);
    const { current, delta } = props;
    this.state = {
      current,
      visibleRange: this.getVisibleRange(current, delta),
    };
  }
  componentWillReceiveProps = ({ current, delta }) => {
    if (current !== this.state.current || delta !== this.props.delta) {
      this.setState({
        current,
        visibleRange: this.getVisibleRange(current, delta),
      });
    }
  };
  getVisibleRange = (current, delta) =>
    Array.from(
      {
        length: delta + current,
      },
      (v, k) => k + 1,
    ).filter(i => i && i >= current && i < current + delta);
  pageTransition(current) {
    this.setState(
      {
        current,
        visibleRange: this.getVisibleRange(current, this.props.delta),
      },
      () => this.props.handlePageChange(current),
    );
  }
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
        {this.state.visibleRange.map(i => (
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
        <li style={{ display: 'inline' }}>
          <button onClick={() => this.pageTransition(this.state.current + 1)}>
            &gt;
          </button>
        </li>
      </ul>
    );
  }
}
