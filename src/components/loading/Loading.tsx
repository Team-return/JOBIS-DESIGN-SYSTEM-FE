import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LoadingImg from '../../styles/icons/Loading.png';
import { Text } from '../Text/Text';

type positionType = 'center' | 'start' | 'end';

interface LoadingProps {
  size?: number;
  position?: positionType;
  isMessage?: boolean;
}

export const Loading = ({ size = 180, position, isMessage }: LoadingProps) => {
  let [message, setMessage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setMessage((pre) => (pre >= 3 ? (pre = 0) : pre + 1));
    }, 300);
  }, [message]);

  return (
    <_Wrapper pos={position ?? 'center'}>
      <Img size={size} src={LoadingImg} />
      {isMessage && (
        <Text margin={[28, 0]} color="blue" size="Body1">{`Loading${'.'.repeat(
          message
        )}`}</Text>
      )}
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ pos?: positionType }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${({ pos }) => pos};
  align-items: ${({ pos }) => pos};
`;

const Img = styled.img<LoadingProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: spin 1.2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
