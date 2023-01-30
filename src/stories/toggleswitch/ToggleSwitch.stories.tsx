import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToggleSwitch } from '../../components/toggleswitch/ToggleSwitch';

export default {
  title: 'component/ToggleSwitch',
  component: ToggleSwitch,
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => (
  <ToggleSwitch {...args} />
);

export const Off = Template.bind({});
Off.args = {
  isClick: false,
};

export const On = Template.bind({});
On.args = {
  isClick: true,
};
