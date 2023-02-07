import React from 'react';
import styled, { css } from 'styled-components';
import { marginCssType, marginToCss } from '../../utils/distance';
import * as C from '../../styles/theme/color';
import * as F from '../../styles/theme/font';
import Arrow from '../../styles/icons/Arrow';

interface DropDownProps extends marginCssType {
  //   label?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  option?: string[];
}

export const DropDown = ({
  className,
  disabled = false,
  onClick,
  margin,
  option,
}: DropDownProps) => {
  return (
    <_DropdownWrapper>
      <Selector
        className={className}
        onClick={onClick}
        margin={margin}
        disabled={disabled}
      >
        {option?.map((res) => {
          return <Options>{res}</Options>;
        })}
      </Selector>
      <Img />
    </_DropdownWrapper>
  );
};

const _DropdownWrapper = styled.div`
  position: relative;
  width: 137px;
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
      background-color: ${C.gray40};
      color: ${C.gray50};
    `}
  ${({ margin }) => marginToCss({ margin })};
`;

const Options = styled.option`
  width: 137px;
  height: 45px;
`;

const Img = styled(Arrow)`
  position: absolute;
  right: 12px;
`;
