import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToastContainer } from '../../components/toast/ToastContainer';

export default {
  title: 'ToastContainer',
  component: ToastContainer,
} as ComponentMeta<typeof ToastContainer>;

const Template: ComponentStory<typeof ToastContainer> = (args) => (
  <ToastContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {};
