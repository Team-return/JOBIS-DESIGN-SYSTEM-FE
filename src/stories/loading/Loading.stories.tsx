import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loading } from '../../components/loading/Loading';

export default {
  title: 'component/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Default = Template.bind({});
Default.args = {};
