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
  return (
    <>
      <THeader width={width}>
        {toggle && toggle !== 'None' && (
          <ToggleHeader>{Toggles(toggle, true)}</ToggleHeader>
        )}
        {title?.map((res, i) => {
          return (
            <HeadCell key={i} width={width[i] ?? 100}>
              {res}
            </HeadCell>
          );
        })}
      </THeader>
      <Wrapper>
        {tableData?.map((res, index) => (
          <TBody key={index}>
            {toggle && toggle !== 'None' && (
              <ToggleBody>{Toggles(toggle, false, name)}</ToggleBody>
            )}
            {tableData[index]?.map((res, i) => {
              return (
                <BodyCell key={i} width={width[i]}>
                  {res}
                </BodyCell>
              );
            })}
          </TBody>
        ))}
      </Wrapper>
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

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: scroll;
`;

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

const THeader = styled.div<{ width?: number[] }>`
  width: 100%;
  display: flex;
  height: 60px;
  overflow: hidden;
`;

const HeadCell = styled.div<{ width?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${C.gray40};
  background-color: ${C.gray20};
  ${F.font.Heading5};
  width: ${({ width }) => width + '%'};
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
  width: ${({ width }) => width + '%'};
`;
