import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../components/button/Button';
import SearchIcon from '../../styles/icons/SearchIcon';

export default {
  title: 'component/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  kind: 'Solid',
  children: 'Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  kind: 'Ghost',
  children: 'Button',
};

export const Light = Template.bind({});
Light.args = {
  kind: 'Light',
  children: 'Button',
};

export const Shadow = Template.bind({});
Shadow.args = {
  kind: 'Shadow',
  children: 'Button',
};

export const Gray = Template.bind({});
Gray.args = {
  kind: 'Gray',
  children: 'Button',
};
