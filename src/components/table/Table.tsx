import * as React from 'react';
import styled from 'styled-components';
import * as C from '../../styles/theme/color';
import { CheckBox } from '../checkbox/CheckBox';
import { RadioButton } from '../radiobutton/RadioButton';
import * as F from '../../styles/theme/font';

type toggleType = 'Radio' | 'CheckBox' | 'None';

interface TableProps {
  toggle?: toggleType;
  title: JSX.Element[];
  tableData?: JSX.Element[][];
  width: number[];
  columns?: number;
  name?: string;
}

export const Table = ({
  toggle,
  tableData = [],
  title = [],
  width,
  name,
}: TableProps) => {
  let col = Array(tableData.length).fill(0);
  return (
    <>
      <THeader>
        {toggle && toggle !== 'None' && (
          <ToggleHeader>{Toggles(toggle, true)}</ToggleHeader>
        )}
        {title?.map((res, i) => {
          return <HeadCell width={width[i] ?? 100}>{res}</HeadCell>;
        })}
      </THeader>
      {tableData?.map((res, index) => (
        <TBody>
          {toggle && toggle !== 'None' && (
            <ToggleBody>{Toggles(toggle, false, name)}</ToggleBody>
          )}
          {tableData[index]?.map((res: any, i: any) => {
            return <BodyCell width={width[i]}>{res}</BodyCell>;
          })}
        </TBody>
      ))}
    </>
  );
};

const Toggles = (toggle: toggleType, head?: boolean, name?: string) => {
  switch (toggle) {
    case 'CheckBox':
      return <CheckBox disabled={head} />;
    case 'Radio':
      return <RadioButton name={name} disabled={head} />;
  }
};

const ToggleHeader = styled.div`
  width: 63px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${C.gray40};
  background-color: ${C.gray20};
`;

const ToggleBody = styled(ToggleHeader)`
  height: 50px;
`;

const THeader = styled.div`
  display: flex;
  height: 60px;
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
  height: 50px;
`;

const BodyCell = styled.div<{ width?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${C.gray40};
  ${F.font.Heading5};
  width: ${({ width }) => width + 'px'};
`;
