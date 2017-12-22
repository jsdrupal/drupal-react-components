import React from 'react';
import {
  string,
  bool,
  oneOf,
} from 'prop-types';

import {
  acceptableTypes,
  acceptableAutocompleteTypes,
} from './proptypehelpers';

const Input = ({ type, accept, autocomplete, disabled }) => (
  <input
    type={type}
    accept={accept}
    autoComplete={autocomplete}
    disabled={disabled}
  />
);

Input.propTypes = {
  type: oneOf(acceptableTypes).isRequired,
  accept: string,
  autocomplete: oneOf(acceptableAutocompleteTypes),
  disabled: bool,
};

Input.defaultProps = {
  accept: false,
  autocomplete: 'off',
  disabled: false,
};

export default Input;
