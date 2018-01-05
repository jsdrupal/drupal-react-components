import React, { Component } from 'react';
import classNames from 'classnames';
import { string, arrayOf, element, bool } from 'prop-types';

import MenuItem from './menuitem';

export default class MenuGroup extends Component {
  static propTypes = {
    className: string,
    children: arrayOf(element).isRequired,
    disabled: bool,
    hidden: bool,
    toggle: string.isRequired,
  };
  static defaultProps = {
    className: '',
    disabled: false,
    hidden: false,
  };
  constructor(props) {
    super(props);
    const { hidden } = props;
    this.state = { hidden };
  }
  state = {
    hidden: false,
  };
  toggleMenuGroup = () => {
    this.setState({ hidden: !this.state.hidden });
  };
  render() {
    return (
      <MenuItem className="has-menu-group">
        <span
          className="menu-group-toggle"
          onClick={this.toggleMenuGroup}
          onKeyPress={this.toggleMenuGroup}
          tabIndex={0}
          role="button"
          style={
            this.props.disabled ? { pointerEvents: 'none', opacity: 0.6 } : {}
          }
        >
          {this.props.toggle}
        </span>
        <ul
          className={classNames(this.props.className, 'menu-group', {
            'menu-group-disabled': this.props.disabled,
            'menu-group-visible': !this.state.hidden,
            'menu-group-hidden': this.state.hidden,
          })}
          style={this.state.hidden ? { display: 'none' } : {}}
        >
          {this.props.children}
        </ul>
      </MenuItem>
    );
  }
}
