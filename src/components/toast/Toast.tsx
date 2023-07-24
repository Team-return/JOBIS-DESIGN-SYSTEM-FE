import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { Text } from '../Text/Text';
import * as C from '../../styles/theme/color';
import { useToastStore } from '../../context/ToastContext';

export type ColorType = 'GREEN' | 'RED' | 'YELLOW' | 'BLUE';

export interface ToastProps {
  id: string;
  type: ColorType;
  title?: string;
  message: string;
}

export const Toast = ({
  id,
  type = 'GREEN',
  title,
  message = 'Message',
}: ToastProps) => {
  const [isOut, setIsOut] = useState(false);
  const { delete: del, list } = useToastStore();

  useEffect(() => {
    setTimeout(() => {
      setIsOut(true);
    }, 4500);
    setTimeout(() => {
      del(id);
    }, 5000);
  }, []);

  const deleteToast = async (id: string) => {
    del(id);
  };

  return (
    <_Wrapper id={id} isOut={isOut} type={type} message="">
      <div style={{ padding: 17 }}>
        <Icon icon={IconName(type)} size={38} color="gray10" />
      </div>
      <div>
        <Text color="gray10" size="Heading6">
          {title}
          {id}
        </Text>
        <Text color="gray10" size="Body2">
          {message}
        </Text>
      </div>
      <Delete onClick={() => deleteToast(id)}>
        <Icon cursor="pointer" icon="Close" size={24} color="gray10" />
      </Delete>
      <Progress />
    </_Wrapper>
  );
};

const _Wrapper = styled.div<ToastProps & { isOut: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 400px;
  height: 80px;
  margin-bottom: 20px;
  border-radius: 3px;
  z-index: 200;
  background-color: ${({ type }) => BackGroundColor(type)};
  opacity: 0.8;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  opacity: 0.8;
  animation: ${({ isOut }) => (isOut ? 'toast-out-right' : 'toast-in-right')}
    1.5s;
  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes toast-out-right {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;

const Delete = styled.div`
  position: absolute;
  right: 12px;
`;

const Progress = styled.div`
  position: absolute;
  bottom: 0;
  height: 5px;
  background-color: #000000;
  opacity: 0.2;
  animation: progressBar 5s linear;
  @keyframes progressBar {
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
`;

const BackGroundColor = (type: ColorType) => {
  switch (type) {
    case 'GREEN':
      return C.success;
    case 'RED':
      return C.error;
    case 'YELLOW':
      return C.warning;
    case 'BLUE':
      return C.skyblue;
  }
};

const IconName = (type: ColorType) => {
  switch (type) {
    case 'GREEN':
      return 'ToastSuccess';
    case 'RED':
      return 'ToastError';
    case 'YELLOW':
      return 'ToastWarning';
    case 'BLUE':
      return 'ToastMessage';
  }
};
