import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from '../../components/modal/Modal';

export default {
  title: 'component/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}></Modal>
);

export const Default = Template.bind({});

Default.args = {};
