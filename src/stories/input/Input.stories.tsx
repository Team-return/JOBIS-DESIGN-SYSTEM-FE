import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../../components/input/Input';

export default {
  title: 'component/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  kind: 'DefaultInput',
};

export const Line = Template.bind({});
Line.args = {
  kind: 'LineInput',
};
