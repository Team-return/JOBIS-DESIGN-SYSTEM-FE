import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stack } from '../../components/stack/Stack';
import styled from 'styled-components';

export default {
  title: 'component/Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <Box>A</Box>
    <Box>B</Box>
  </Stack>
);

export const Default = Template.bind({});
Default.args = {
  width: 300,
  height: 300,
  direction: 'row',
};

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: red;
  color: white;
  border: 3px solid yellowgreen;
  font-size: 20px;
  font-weight: 600;
`;
