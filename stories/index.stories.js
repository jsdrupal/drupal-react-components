import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select from '../src/components/select';
import { Breadcrumb, BreadcrumbItem } from '../src/components/breadcrumb';
import Button from '../src/components/button';

storiesOf('Welcome', module).add('to Drupal react components', () => (
  <p>Welcome to Drupal react components ...</p>
));

storiesOf('Breadcrumb', module).add('default', () => (
  <Breadcrumb>
    <BreadcrumbItem href="/" onClick={action('link 1')}>
      Home
    </BreadcrumbItem>
    <BreadcrumbItem href="/admin" onClick={action('link 1')}>
      Admin
    </BreadcrumbItem>
    <BreadcrumbItem href="/admin/structure" onClick={action('link 1')}>
      <b>Structure</b>
    </BreadcrumbItem>
  </Breadcrumb>
));

storiesOf('Button', module).add('default', () => (
  <Button onClick={action('clicked')} content="Hey this is me" />
));

storiesOf('Select', module).add('default', () => (
  <Select
    data={[
      { item: 'Value ◀️', value: 'value1' },
      { item: 'Value ✌️', value: 'value2' },
      { item: 'Value ▶️', value: 'value3' },
    ]}
    onChange={action('selected')}
  />
));
