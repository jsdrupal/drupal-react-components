import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select from '../src/components/select';
import { Breadcrumb, BreadcrumbItem } from '../src/components/breadcrumb';
import Button from '../src/components/button';
import Table from '../src/components/table';

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

storiesOf('Table', module).add('simple data', () => (
  <Table
    header={{ 1: 'Header 1', 2: 'Header 2', 3: 'Header 3' }}
    rows={[
      { 1: 10, 2: 20, 3: 30 },
      { 1: 11, 2: 21, 3: 31 },
      { 1: 12, 2: 22, 3: 32 },
    ]}
  />
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
