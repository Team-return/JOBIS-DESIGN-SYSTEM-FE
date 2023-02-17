import React from 'react';
import styled from 'styled-components';
import { Button } from '../button/Button';
import { Text } from '../Text/Text';

interface ModalProps {
  visible: boolean;
  title?: string;
  description?: string;
  hideButtons?: boolean;
  cancellable?: boolean;
  cancelText: string;
  confirmText: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const Modal = ({
  title = 'Title',
  visible = true,
  description = 'Message',
  hideButtons,
  cancellable,
  cancelText = '취소',
  confirmText = '확인',
  onCancel,
  onConfirm,
}: ModalProps) => {
  const EventBubbling = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {visible && (
        <_Background onClick={onCancel}>
          <_Wrapper onClick={EventBubbling}>
            <Text margin={[16, 0, 0, 20]} size="Heading6" color="gray90">
              {title}
            </Text>
            <Text margin={[10, 0, 0, 20]} size="Body2" color="gray90">
              {description}
            </Text>
            {!hideButtons && (
              <_Buttons>
                {!cancellable && (
                  <Button onClick={onCancel} kind="Gray" size="XS">
                    {cancelText}
                  </Button>
                )}
                <Button onClick={onConfirm} size="XS">
                  {confirmText}
                </Button>
              </_Buttons>
            )}
          </_Wrapper>
        </_Background>
      )}
    </>
  );
};

const _Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99;
`;

const _Wrapper = styled.div`
  position: relative;
  width: 400px;
  height: 181px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.gray10};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

const _Buttons = styled.div`
  position: absolute;
  bottom: 11px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
