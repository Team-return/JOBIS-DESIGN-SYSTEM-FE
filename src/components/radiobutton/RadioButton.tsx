import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { marginCssType, marginToCss } from '../../utils/distance';
import * as C from '../../styles/theme/color';
import * as F from '../../styles/theme/font';

interface RadioButtonProps extends marginCssType {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  value?: string;
  checked?: boolean;
  name?: string;
}

export const RadioButton = ({
  className,
  disabled = false,
  onClick,
  margin,
  children,
  name,
  checked,
  value,
}: RadioButtonProps) => {
  return (
    <_Label>
      <_Wrapper
        className={className}
        onClick={onClick}
        margin={margin}
        type="radio"
        value={value}
        disabled={disabled}
        checked={checked}
        name={name}
      />
      {children}
    </_Label>
  );
};

const _Label = styled.label`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const _Wrapper = styled.input<RadioButtonProps>`
  width: 16px;
  height: 16px;
  ${({ margin }) => marginToCss({ margin })};
  accent-color: #0087ff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
`;
