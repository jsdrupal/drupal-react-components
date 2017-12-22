import React, { Component } from 'react';
import { arrayOf, string, func, shape, array } from 'prop-types';

const Select = class Select extends Component {
  static propTypes = {
    data: arrayOf(shape({
      item: string,
      value: string,
    })).isRequired,
    label: string,
    onChange: func.isRequired,
    selected: arrayOf(array),
    size: string,
  }
  static defaultProps = {
    label: '',
    size: '2',
    selected: [],
  }
  constructor({ onChange }) {
    super();
    this.onChange = onChange;
  }
  changeHandler = (e) => {
    const selected = new Set(Array.from(e.target.options)
      .filter(option => option.selected)
      .map(option => option.value));
    this.onChange(selected);
  }
  render() {
    const { label, data, selected, size } = this.props;
    return (
      <select key={`select-${label || 'select'}`} multiple size={size} onChange={this.changeHandler} value={Array.from(selected || [])}>
        {data.map(({ value, item }) => (
          <option key={`${item}-${value}`} value={value}>{item}</option>
        ))}
      </select>
    );
  }
};

export default Select;
