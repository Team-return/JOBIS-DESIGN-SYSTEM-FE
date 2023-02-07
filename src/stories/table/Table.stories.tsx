import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from '../../components/table/Table';

export default {
  title: 'component/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: [100, 200, 200],
  title: ['ID', 'PASSWORD', 'EMAIL'],
  tableData: [
    ['1', '1234', '@gmail'],
    ['2', '2134', '@naver'],
  ],
};
