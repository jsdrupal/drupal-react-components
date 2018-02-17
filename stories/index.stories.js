import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select from '../src/components/select';
import { Breadcrumb, BreadcrumbItem } from '../src/components/breadcrumb';
import Button from '../src/components/button';
import { TableSimple, TableSortable, Menu, MenuGroup, MenuItem } from '../src';

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

storiesOf('TableSimple', module).add('simple data', () => (
  <TableSimple
    headers={[
      { title: 'Animal', key: 'animal' },
      { title: 'Height', key: 'height' },
    ]}
    rows={[{ animal: 'Dog', height: 200 }, { animal: 'Cat', height: 150 }]}
  />
));

storiesOf('TableSortable', module).add('simple data', () => (
  <TableSortable
    headers={[
      { title: 'Animal', key: 'animal' },
      { title: 'Height', key: 'height' },
    ]}
    rows={[{ animal: 'Dog', height: 200 }, { animal: 'Cat', height: 150 }]}
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

storiesOf('Menus', module).add('to Drupal react components', () => (
  <Menu>
    <MenuItem>
      <MenuGroup toggle="Content">
        <MenuItem>
          <div>Content</div>
        </MenuItem>
        <MenuItem>
          <div>Comments</div>
        </MenuItem>
      </MenuGroup>
      <MenuGroup toggle="Structure">
        <MenuItem>
          <div>Content types</div>
        </MenuItem>
        <MenuItem>
          <div>Block layout</div>
        </MenuItem>
        <MenuItem>
          <div>Menus</div>
        </MenuItem>
        <MenuItem>
          <div>Views</div>
        </MenuItem>
      </MenuGroup>
      <MenuGroup toggle="Configuration">
        <MenuGroup toggle={<div>System</div>}>
          <MenuItem>
            <div>Basic site settings</div>
          </MenuItem>
          <MenuItem>
            <div>Cron</div>
          </MenuItem>
        </MenuGroup>
      </MenuGroup>
    </MenuItem>
  </Menu>
));
