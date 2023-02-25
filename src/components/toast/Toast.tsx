import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { Text } from '../Text/Text';
import * as C from '../../styles/theme/color';

export type ColorType = 'GREEN' | 'RED' | 'YELLOW' | 'BLUE';

export interface ToastProps {
  id?: number;
  type?: ColorType;
  title?: string;
  message: string;
  time?: number;
}

export const Toast = ({
  type,
  title,
  message = 'Message',
  time,
}: ToastProps) => {
  const [num, setNum] = useState<number>(time ?? 5);
  const progress = Math.floor((num / (time ?? 5)) * 100);
  useEffect(() => {
    setTimeout(() => {
      setNum((prev) => prev - 0.1);
    }, 100);
  }, [num]);

  if (num < 0) {
    setNum(5);
  }

  return (
    <_Wrapper type={type} message="">
      <div style={{ padding: 17 }}>
        <Icon icon={IconName(type ?? 'GREEN')} size={38} color="gray10" />
      </div>
      <div>
        <Text color="gray10" size="Heading6">
          {title}
        </Text>
        <Text color="gray10" size="Body2">
          {message}
        </Text>
      </div>
      <Delete>
        <Icon cursor="pointer" icon="Close" size={24} color="gray10" />
      </Delete>
      <Progress progress={progress}></Progress>
    </_Wrapper>
  );
};

const _Wrapper = styled.div<ToastProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 400px;
  height: 80px;
  margin-bottom: 20px;
  border-radius: 3px;
  background-color: ${({ type }) => BackGroundColor(type ?? 'GREEN')};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  opacity: 0.8;
  animation: toast-in-right 1.5s;
  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const Delete = styled.div`
  position: absolute;
  right: 12px;
`;

const Progress = styled.div<{ progress?: number }>`
  position: absolute;
  bottom: 0;
  width: ${(props) => props.progress + '%'};
  height: 5px;
  background-color: #000000;
  opacity: 0.2;
  transition: 0.2s;
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
