import React from 'react';
import styled from 'styled-components';
import { marginCssType, marginToCss } from '../../utils/distance';

interface CheckBoxProps extends marginCssType {
  //   label?: string;
  className?: string;
  disabled: boolean;
  checked?: boolean;
  onClick?: () => void;
}

export const CheckBox = ({
  className,
  disabled = false,
  checked,
  onClick,
  margin,
}: CheckBoxProps) => {
  return (
    <_CheckBoxWrapper>
      <_Wrapper
        className={className}
        onClick={onClick}
        margin={margin}
        disabled={disabled}
        type="checkbox"
        checked={checked}
      />
    </_CheckBoxWrapper>
  );
};

const _CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const _Wrapper = styled.input<CheckBoxProps>`
  width: 16px;
  height: 16px;
  ${({ margin }) => marginToCss({ margin })};
  accent-color: #0087ff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
`;
