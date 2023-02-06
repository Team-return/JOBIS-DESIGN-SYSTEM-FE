import React from 'react';
import styled, { css } from 'styled-components';
import { marginCssType, marginToCss } from '../../utils/distance';
import * as C from '../../styles/theme/color';
import { SwitchOn } from './SwitchOn';
import { SwitchOff } from './SwitchOff';

interface ToggleSwitchProps extends marginCssType {
  //   label?: string;
  className?: string;
  disabled?: boolean;
  isClick?: boolean;
  onClick?: () => void;
}

export const ToggleSwitch = ({
  className,
  disabled = false,
  isClick,
  onClick,
  margin,
}: ToggleSwitchProps) => {
  return (
    <_ToggleSwitchWrapper
      className={className}
      onClick={onClick}
      margin={margin}
      disabled={disabled}
      isClick={isClick}
    >
      <_Circle disabled={disabled} isClick={isClick} />
    </_ToggleSwitchWrapper>
  );
};

const _ToggleSwitchWrapper = styled.div<ToggleSwitchProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 34px;
  height: 18px;
  border-radius: 100px;
  ${({ margin }) => marginToCss({ margin })};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  ${({ isClick, disabled }) =>
    isClick ? SwitchOn(disabled) : SwitchOff(disabled)}
  transition: 0.5s;
`;

const _Circle = styled.div<{ isClick?: boolean; disabled?: boolean }>`
  position: absolute;
  ${(props) => (props.isClick ? 'right: 3px;' : 'left: 3px;')}
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ disabled, isClick }) =>
    disabled && isClick ? C.gray40 : C.gray30};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  transition: 0.5s;
`;
