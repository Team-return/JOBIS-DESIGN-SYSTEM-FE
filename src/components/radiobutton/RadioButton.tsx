import React from 'react';
import styled, { css } from 'styled-components';
import { marginCssType, marginToCss } from '../../utils/distance';
import * as C from '../../styles/theme/color';
import * as F from '../../styles/theme/font';

interface RadioButtonProps extends marginCssType {
  //   label?: string;
  className?: string;
  disabled: boolean;
  onClick?: () => void;
}

export const RadioButton = ({
  className,
  disabled = false,
  onClick,
  margin,
}: RadioButtonProps) => {
  return (
    <_RadioButtonWrapper>
      <_Wrapper
        className={className}
        onClick={onClick}
        margin={margin}
        disabled={disabled}
        type="radio"
      />
    </_RadioButtonWrapper>
  );
};

const _RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const _Wrapper = styled.input<RadioButtonProps>`
  width: 16px;
  height: 16px;
  ${({ margin }) => marginToCss({ margin })};
  accent-color: #0087ff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
`;
