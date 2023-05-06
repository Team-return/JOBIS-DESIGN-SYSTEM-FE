import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { marginCssType, marginToCss, marginType } from '../../utils/distance';
import * as C from '../../styles/theme/color';
import * as F from '../../styles/theme/font';
import ChevronDown from '../../styles/icons/ChevronDown';
import { theme } from '../../styles/theme';

interface DropDownProps<T> extends marginCssType {
  //   label?: string;
  className?: string;
  disabled?: boolean;
  onChange: (value: T) => void;
  value: T;
  option: T[];
  width?: number;
}

export const DropDown = <T extends string>({
  className,
  disabled = false,
  margin,
  option,
  value,
  onChange,
  width,
}: DropDownProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<T>(value ? value : option[0]);
  const outsideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setData(value ? value : option[0]);
  }, [value]);

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
        width={width}
      >
        {data}
        <_Img isOpen={isOpen}>
          <ChevronDown />
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
                    onChange(res);
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
  position: relative;
  width: ${({ width }) => width + '%'};
  display: flex;
  flex-direction: column;
`;

const _Selector = styled.div<{
  margin?: marginType | marginType[];
  disabled?: boolean;
  width?: number;
}>`
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
  position: absolute;
  width: 100%;
  margin-top: 50px;
  overflow: scroll;
  max-height: 180px;
  border: 1px solid ${C.gray40};
  z-index: 100;
  background-color: ${theme.color.gray10};
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
