import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { toastStateContext } from '../../context/ToastContext';
import { ColorType, Toast, ToastProps } from './Toast';

export const ToastContainer = ({}) => {
  const toastState = useContext(toastStateContext);

  return (
    <_Container>
      {/* {toastState.lists.map((list) => {
        const { title, message, type } = list;
        return <Toast type={type} title={title} message={message} />;
      })} */}
    </_Container>
  );
};

const _Container = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  gap: 20px;
`;
