import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropDown } from '../../components/dropdown/DropDown';

export default {
  title: 'component/DropDown',
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args} />
);

export const Off = Template.bind({});
Off.args = {
  option: ['드롭다운', '예시'],
};
