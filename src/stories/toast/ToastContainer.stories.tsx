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
  const [list, append] = useToastStore((state) => [state.list, state.append]);
  useEffect(() => {
    append({
      type: 'YELLOW',
      message: '정보',
      title: '안녕하세요',
    });
    setTimeout(
      () =>
        append({
          type: 'GREEN',
          message: '성공',
        }),
      1000
    );
    setTimeout(
      () =>
        append({
          type: 'RED',
          message: '에러',
        }),
      2000
    );
    setTimeout(
      () =>
        append({
          type: 'RED',
          message: '에러',
        }),
      8000
    );
  }, []);
  return <div></div>;
};

export const Default = Template.bind({});
Default.args = {};

export const errorToast = Template.bind({});

errorToast.args = {
  type: 'RED',
  message: 'message',
};
