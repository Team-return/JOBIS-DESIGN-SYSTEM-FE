import * as React from 'react';
import styled from 'styled-components';
import * as C from '../../styles/theme/color';
import { CheckBox } from '../checkbox/CheckBox';
import { RadioButton } from '../radiobutton/RadioButton';
import * as F from '../../styles/theme/font';

type toggleType = 'Radio' | 'CheckBox' | 'None';

interface TableProps {
  toggle?: toggleType;
  title: string[];
  tableData?: any;
  width: number[];
  columns?: number;
}

export const Table = ({
  toggle,
  tableData = [],
  title = [],
  width,
  columns = 5,
}: TableProps) => {
  let col = Array(tableData.length).fill(0);
  let column = Array(columns - tableData.length).fill(0);
  let row = Array(title.length).fill(0);
  return (
    <>
      <THeader>
        {toggle && toggle !== 'None' && (
          <ToggleHeader>{Toggles(toggle)}</ToggleHeader>
        )}
        {title?.map((res, i) => {
          return <HeadCell width={width[i] ?? 100}>{res}</HeadCell>;
        })}
      </THeader>
      {col?.map((res, index) => (
        <TBody>
          {toggle && toggle !== 'None' && (
            <ToggleHeader>{Toggles(toggle)}</ToggleHeader>
          )}
          {tableData[index]?.map((res: any, i: any) => {
            return <BodyCell width={width[i]}>{res}</BodyCell>;
          })}
        </TBody>
      ))}
    </>
  );
};

const Toggles = (toggle: toggleType) => {
  switch (toggle) {
    case 'CheckBox':
      return <CheckBox />;
    case 'Radio':
      return <RadioButton />;
  }
};

const ToggleHeader = styled.div`
  width: 63px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${C.gray40};
  background-color: ${C.gray20};
`;

const THeader = styled.div`
  display: flex;
  height: 72px;
`;

const HeadCell = styled.div<{ width?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${C.gray40};
  background-color: ${C.gray20};
  ${F.font.Heading5};
  width: ${({ width }) => width + 'px'};
`;

const TBody = styled.div`
  display: flex;
  height: 72px;
`;

const BodyCell = styled.div<{ width?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${C.gray40};
  ${F.font.Heading5};
  width: ${({ width }) => width + 'px'};
`;
