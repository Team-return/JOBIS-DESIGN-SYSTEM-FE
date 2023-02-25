import React, { useContext, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToastContainer } from '../../components/toast/ToastContainer';
import {
  toastDispatchContext,
  ToastProvider,
  toastStateContext,
} from '../../context/ToastContext';

export default {
  title: 'ToastContainer',
  component: ToastContainer,
} as ComponentMeta<typeof ToastContainer>;

const Template: ComponentStory<typeof ToastContainer> = (args) => (
  <ToastProvider>
    <Test></Test>
    <ToastContainer {...args} />
  </ToastProvider>
);

const Test = () => {
  const state = useContext(toastStateContext);
  const dispatch = useContext(toastDispatchContext);
  useEffect(() => {
    dispatch({
      actionType: 'APPEND_TOAST',
      toastType: 'YELLOW',
      message: '정보',
      title: '안녕하세요',
    });
    setTimeout(
      () =>
        dispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'GREEN',
          message: '성공',
        }),
      1000
    );
    setTimeout(
      () =>
        dispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'RED',
          message: '에러',
        }),
      2000
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
