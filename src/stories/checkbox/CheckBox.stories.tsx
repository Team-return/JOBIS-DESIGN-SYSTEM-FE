import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBox } from '../../components/checkbox/CheckBox';
import { on } from 'events';

export default {
  title: 'component/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const Off = Template.bind({});
Off.args = {
  checked: false,
};

export const On = Template.bind({});
On.args = {
  checked: true,
};
