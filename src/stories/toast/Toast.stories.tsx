import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toast } from '../../components/toast/Toast';

export default {
  title: 'component/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  message: 'Message',
};
