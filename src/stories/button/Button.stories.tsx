import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../components/button/Button';

export default {
  title: 'component/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  kind: 'Solid',
};

export const Ghost = Template.bind({});
Ghost.args = {
  kind: 'Ghost',
};

export const Light = Template.bind({});
Light.args = {
  kind: 'Light',
};

export const Gray = Template.bind({});
Gray.args = {
  kind: 'Gray',
};
