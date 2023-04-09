import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { marginCssType, marginToCss } from '../../utils/distance';
import * as C from '../../styles/theme/color';
import * as F from '../../styles/theme/font';
import { Icon } from '../icon/Icon';
import ChevronDown from '../../styles/icons/ChevronDown';

interface DropDownProps extends marginCssType {
  //   label?: string;
  className?: string;
  disabled?: boolean;
  onChange?: () => void;
  option?: string[];
  width?: number;
}

export const DropDown = ({
  className,
  disabled = false,
  margin,
  option,
  onChange,
  width,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<string>(option ? option[0] : '없음');
  const outsideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      // 현재 document에서 mousedown 이벤트가 동작하면 호출되는 함수입니다.
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [outsideRef]);

  return (
    <_DropdownWrapper width={width} ref={outsideRef}>
      <_Selector
        className={className}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        margin={margin}
        disabled={disabled}
        onChange={onChange}
        width={width}
      >
        {data}
        <_Img isOpen={isOpen}>
          <ChevronDown></ChevronDown>
        </_Img>
      </_Selector>
      {isOpen && option && option.length > 1 && (
        <_Items width={width} isOpen={isOpen}>
          {option
            ?.filter((res) => data !== res)
            .map((res, idx) => {
              return (
                <_Item
                  key={idx}
                  width={width}
                  onClick={() => {
                    setData(res);
                    setIsOpen(false);
                  }}
                >
                  {res}
                </_Item>
              );
            })}
        </_Items>
      )}
    </_DropdownWrapper>
  );
};

const _DropdownWrapper = styled.div<{ width?: number }>`
  width: ${({ width }) => width + '%'};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const _Selector = styled.div<DropDownProps>`
  position: relative;
  border: 0;
  border: 1px solid ${C.gray40};
  ${F.font.Body4};
  padding: 10px 10px 10px 15px;
  height: 45px;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  z-index: 99;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: ${C.gray40};
      color: ${C.gray50};
    `}
  ${({ margin }) => marginToCss({ margin })};
`;

const _Items = styled.div<{ width?: number; isOpen?: boolean }>`
  width: 100%;
  margin-top: 5px;
  overflow: scroll;
  max-height: 180px;
  border: 1px solid ${C.gray40};
  z-index: 99;
  @keyframes dropdown {
    0% {
      max-height: 0px;
    }
    100% {
      max-height: 180px;
    }
  }
  animation: dropdown 0.4s ease;
`;

const _Item = styled.div<{ width?: number }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  padding-left: 15px;
  ${F.font.Body1};
  color: ${C.gray60};
  z-index: 1;
  &:hover {
    background-color: ${C.gray30};
    cursor: pointer;
  }
`;

const _Img = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  right: 10px;
  rotate: ${({ isOpen }) => (isOpen ? '180deg' : '0deg')};
  transition-duration: 0.2s;
`;
