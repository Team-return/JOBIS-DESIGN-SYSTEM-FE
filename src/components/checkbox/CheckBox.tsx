import React, { Children, ReactNode } from 'react';
import styled from 'styled-components';
import { marginCssType, marginToCss } from '../../utils/distance';
import { theme } from '../../styles/theme';

interface CheckBoxProps extends marginCssType {
  //TODO label?: string;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  onChange?: () => void;
}

export const CheckBox = ({
  className,
  disabled = false,
  checked,
  onClick,
  margin,
  children,
  onChange,
}: CheckBoxProps) => {
  return (
    <_CheckBoxWrapper>
      <_Wrapper
        onChange={onChange}
        className={className}
        onClick={onClick}
        margin={margin}
        disabled={disabled}
        type="checkbox"
        checked={checked}
      />
      {children}
    </_CheckBoxWrapper>
  );
};

const _CheckBoxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  ${theme.font.Body2};
  color: ${theme.color.gray70};
`;

const _Wrapper = styled.input<CheckBoxProps>`
  appearance: none;
  width: 18px;
  height: 18px;
  ${({ margin }) => marginToCss({ margin })};
  accent-color: #0087ff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  border: 1px solid ${theme.color.gray50};
  border-radius: 4px;
  cursor: pointer;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${theme.color.blue};
  }
`;
