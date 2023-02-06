import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../../components/Text/Text';

export default {
  title: 'component/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}></Text>;

export const Basic = Template.bind({});

Basic.args = {
  color: 'black900',
  children: '텍스트',
};
