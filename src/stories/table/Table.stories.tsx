import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from '../../components/table/Table';

export default {
  title: 'component/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <div style={{ width: 800 }}>
    <Table {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  width: [10, 20, 30],
  title: [<>ID</>, <>PASSWORD</>, <>EMAIL</>],
  tableData: [
    [<>1</>, <>1234</>, <>@gmail</>],
    [<>2</>, <>2134</>, <>@naver</>],
    [<>2</>, <>2134</>, <>@naver</>],
    [<>2</>, <>2134</>, <>@naver</>],
    [<>2</>, <>2134</>, <>@naver</>],
    [<>2</>, <>2134</>, <>@naver</>],
    [<>2</>, <>2134</>, <>@naver</>],
    [<>2</>, <>2134</>, <>@naver</>],
  ],
};
