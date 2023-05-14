import React, { ReactNode } from 'react';
import { marginCssType, marginToCss } from '../../utils/distance';
import styled from 'styled-components';

type DirectionType = 'row' | 'column' | 'row-reverse' | 'column-reverse';

type ItemType =
  | 'start'
  | 'center'
  | 'end'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

type WrapType = 'nowrap' | 'wrap' | 'wrap-reverse';

export interface StackProps extends marginCssType {
  width?: number;
  height?: number;
  direction?: DirectionType;
  align?: ItemType;
  justify?: ItemType;
  gap?: number;
  wrap?: WrapType;
  children?: ReactNode;
}

export const Stack = ({
  width,
  height,
  direction,
  align,
  justify,
  gap,
  margin,
  children,
}: StackProps) => {
  return (
    <Container
      width={width}
      height={height}
      direction={direction}
      align={align}
      justify={justify}
      gap={gap}
      margin={margin}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<StackProps>`
  display: flex;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-wrap: ${({ wrap }) => wrap};
  gap: ${({ gap }) => gap}px;
  ${({ margin }) => marginToCss({ margin })};
`;
