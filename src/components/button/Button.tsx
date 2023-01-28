import React from 'react';
import styled, { css } from 'styled-components';
import { marginCssType, marginToCss } from '../../utils/distance';
import * as C from '../../styles/theme/color';
import * as F from '../../styles/theme/font';

type kindType = 'Solid' | 'Ghost' | 'Light' | 'Gray';
type sizeType = 'XS' | 'S' | 'M' | 'L';

interface ButtonProps extends marginCssType {
  label?: string;
  className?: string;
  kind: kindType;
  size: sizeType;
  disabled: boolean;
  Icon?: JSX.Element;
  onClick?: () => void;
}

export const Button = ({
  label = 'Button',
  className,
  kind = 'Solid',
  size = 'M',
  disabled = false,
  Icon,
  onClick,
  margin,
}: ButtonProps) => {
  return (
    <_Wrapper
      className={className}
      size={size}
      kind={kind}
      disabled={disabled}
      onClick={onClick}
      margin={margin}
    >
      {label}
    </_Wrapper>
  );
};

const _Wrapper = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  padding: 0 15px;
  gap: 5px;
  ${F.font.Heading6};
  min-width: ${({ size }) => {
    switch (size) {
      case 'L':
        return '265px';
      case 'M':
        return '107px';
      case 'S':
        return '71px';
      case 'XS':
        return '56px';
    }
  }};
  ${({ margin }) => marginToCss({ margin })};
  ${({ disabled, kind }) => cssGenerator(kind, disabled)};
`;

const cssGenerator = (kind: kindType, disabled: boolean) => {
  switch (kind) {
    case 'Solid':
      return css`
        color: ${C.gray10};
        background-color: ${disabled ? C.gray50 : C.liteBlue};
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        &:hover {
          background-color: ${!disabled && C.blue};
        }
      `;
    case 'Ghost':
      return css`
        color: ${disabled ? C.gray50 : C.liteBlue};
        background-color: ${C.gray10};
        border: 1.5px solid ${disabled ? C.gray40 : C.liteBlue};
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        &:hover {
          background-color: ${!disabled && C.gray40};
        }
      `;
    case 'Light':
      return css`
        color: ${disabled ? C.gray50 : C.liteBlue};
        background-color: ${C.gray30};
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        &:hover {
          background-color: ${!disabled && C.gray40};
        }
      `;
    case 'Gray':
      return css`
        color: ${disabled ? C.gray50 : C.gray80};
        background-color: ${C.gray30};
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        &:hover {
          background-color: ${!disabled && C.gray40};
        }
      `;
  }
};
