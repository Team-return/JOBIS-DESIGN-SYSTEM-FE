import styled, { css } from 'styled-components';
import { marginCssType, marginToCss } from '../../utils/distance';
import * as C from '../../styles/theme/color';
import * as F from '../../styles/theme/font';
import { Icon, IconType } from '../../components/icon/Icon';
import { ReactNode, useState } from 'react';

type kindType = 'Solid' | 'Ghost' | 'Light' | 'Gray' | 'Shadow';
type sizeType = 'ONLYICON' | 'XXS' | 'XS' | 'S' | 'M' | 'L';
type iconDirectionType = 'Left' | 'Right';

interface ButtonProps extends marginCssType {
  children?: ReactNode;
  className?: string;
  kind?: kindType;
  size?: sizeType;
  disabled?: boolean;
  iconDirection?: iconDirectionType;
  iconName?: IconType;
  onClick?: () => void;
}

export const Button = ({
  children = 'Button',
  className,
  kind = 'Solid',
  size = 'M',
  disabled = false,
  iconName,
  iconDirection = 'Left',
  margin,
  onClick,
}: ButtonProps) => {
  const [press, setPress] = useState(false);

  return (
    <_Wrapper
      onClick={onClick}
      className={className}
      size={size}
      kind={kind}
      disabled={disabled}
      margin={margin}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
    >
      {iconDirection === 'Left' && iconName && (
        <Icon
          size={IconSize(size)}
          icon={iconName}
          color={IconColor(kind, disabled, press)}
        />
      )}
      {!(size === 'ONLYICON') && children}
      {iconDirection === 'Right' && iconName && (
        <Icon
          size={IconSize(size)}
          icon={iconName}
          color={IconColor(kind, disabled, press)}
        />
      )}
    </_Wrapper>
  );
};

const _Wrapper = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ size }) => {
    switch (size) {
      case 'L':
      case 'M':
        return '45px';
      case 'S':
        return '37px';
      case 'XS':
      case 'XXS':
        return '30px';
      case 'ONLYICON':
        return '45px';
    }
  }};
  padding: 0 15px;
  gap: 5px;
  border-radius: ${({ size }) => {
    switch (size) {
      case 'ONLYICON':
        return '50px';
    }
  }};
  ${({ size }) => {
    switch (size) {
      case 'L':
      case 'M':
        return F.font.Heading6;
      case 'S':
        return F.font.Body1;
      case 'XS':
      case 'XXS':
        return F.font.Body2;
      default:
        return F.font.Heading6;
    }
  }};
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
      case 'XXS':
        return '60px';
      case 'ONLYICON':
        return '15px';
    }
  }};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  ${({ margin }) => marginToCss({ margin })};
  ${({ disabled, kind }) => cssGenerator(kind ?? 'Solid', disabled ?? false)};
`;

const cssGenerator = (kind: kindType, disabled: boolean) => {
  switch (kind) {
    case 'Solid':
      return css`
        color: ${C.gray10};
        background-color: ${disabled ? C.gray50 : C.liteBlue};
        &:hover {
          background-color: ${!disabled && C.blue};
        }
        &:active {
          background-color: ${!disabled && C.darkBlue};
          color: ${!disabled && C.gray10};
        }
      `;
    case 'Ghost':
      return css`
        color: ${disabled ? C.gray50 : C.liteBlue};
        background-color: ${C.gray10};
        border: 1.5px solid ${disabled ? C.gray40 : C.liteBlue};
        &:hover {
          background-color: ${!disabled && C.gray40};
        }
        &:active {
          background-color: ${!disabled && C.liteBlue};
          color: ${!disabled && C.gray10};
        }
      `;
    case 'Light':
      return css`
        color: ${disabled ? C.gray50 : C.liteBlue};
        background-color: ${C.gray30};
        &:hover {
          background-color: ${!disabled && C.gray40};
        }
        &:active {
          background-color: ${!disabled && C.liteBlue};
          color: ${!disabled && C.gray10};
        }
      `;
    case 'Shadow':
      return css`
        color: ${disabled ? C.gray50 : C.gray90};
        background-color: ${disabled ? C.gray30 : C.gray10};
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        &:hover {
          background-color: ${!disabled && C.gray30};
        }
        &:active {
          background-color: ${!disabled && C.liteBlue};
          color: ${!disabled && C.gray10};
        }
      `;
    case 'Gray':
      return css`
        color: ${disabled ? C.gray50 : C.gray80};
        background-color: ${C.gray30};
        &:hover {
          background-color: ${!disabled && C.gray40};
        }
        &:active {
          background-color: ${!disabled && C.gray60};
          color: ${!disabled && C.gray10};
        }
      `;
  }
};

const IconColor = (kind: kindType, disabled: boolean, isPress: boolean) => {
  switch (kind) {
    case 'Solid':
      return 'gray10';
    case 'Ghost':
    case 'Light':
    case 'Shadow':
      return disabled ? 'gray50' : isPress ? 'gray10' : 'liteBlue';
    case 'Gray':
      return disabled ? 'gray50' : isPress ? 'gray10' : 'gray80';
    default:
      return 'gray90';
  }
};

const IconSize = (size: sizeType) => {
  switch (size) {
    case 'L':
      return 18;
    case 'M':
      return 17;
    case 'S':
      return 15;
    default:
      return 14;
  }
};
