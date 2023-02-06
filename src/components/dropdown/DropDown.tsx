import React from 'react';
import styled, { css } from 'styled-components';
import { marginCssType, marginToCss } from '../../utils/distance';
import * as C from '../../styles/theme/color';
import * as F from '../../styles/theme/font';

interface DropDownProps extends marginCssType {
  //   label?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const DropDown = ({
  className,
  disabled = false,
  onClick,
  margin,
}: DropDownProps) => {
  return (
    <_CheckBoxWrapper>
      <Selector value="dropdown" disabled={disabled} />
    </_CheckBoxWrapper>
  );
};

const _CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Selector = styled.select<DropDownProps>`
  appearance: none;
  border: 0;
  border: 1px solid ${C.gray40};
  ${F.font.Body4};
  padding: 10px 3em 10px 15px;
  position: relative;
  outline: none;
  min-width: 137px;
  margin: 0;
  display: block;
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
`;
