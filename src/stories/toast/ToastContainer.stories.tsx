import React, { useContext, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToastContainer } from '../../components/toast/ToastContainer';
import { useToastStore } from '../../context/ToastContext';

export default {
  title: 'ToastContainer',
  component: ToastContainer,
} as ComponentMeta<typeof ToastContainer>;

const Template: ComponentStory<typeof ToastContainer> = (args) => (
  <>
    <ToastContainer />
    <Test />
  </>
);

const Test = () => {
  const { append } = useToastStore();

  return (
    <div>
      <button
        onClick={() => {
          append({
            type: 'YELLOW',
            message: '정보',
            title: '안녕하세요',
          });
        }}
      >
        정지관
      </button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const errorToast = Template.bind({});

errorToast.args = {
  type: 'RED',
  message: 'message',
};
