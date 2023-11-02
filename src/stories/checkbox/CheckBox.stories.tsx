import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBox } from '../../components/checkbox/CheckBox';

export default {
  title: 'component/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const Off = Template.bind({});
Off.args = {
  disabled: false,
  checked: false,
  children: '체크 박스',
};

export const On = Template.bind({});
On.args = {
  checked: true,
};
