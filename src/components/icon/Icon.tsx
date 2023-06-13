import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { icons } from '../../styles/icon';
import { colorKeyOfType } from '../../styles/theme/color';
import * as C from '../../styles/theme/color';
import { directionType } from '../../types/direction';

type DirectionRotateType = { [key: string]: number };

const directionRotate: DirectionRotateType = {
  bottom: 0,
  left: 90,
  top: 180,
  right: 270,
};

const Svg = styled.svg<{ direction?: directionType }>`
  display: inline-block;
  shape-rendering: inherit;
  transform: rotate(
    ${({ direction }) => directionRotate[direction ?? 'bottom'] + 'deg'}
  );
  path {
    fill: currentColor;
  }
`;

export const Icon: React.FC<IconProps> = ({
  icon,
  size = 24,
  color,
  onClick,
  cursor,
  direction,
  ...props
}: IconProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      onClick={onClick}
      width={size}
      height={size}
      color={C[color ?? 'gray90']}
      direction={direction}
      cursor={cursor}
      {...props}
    >
      <>{icons[icon]}</>
    </Svg>
  );
};

export type IconType = keyof typeof icons;

export interface IconProps {
  icon: IconType;
  size?: number;
  color?: colorKeyOfType;
  onClick?: () => void;
  cursor?: 'pointer' | 'auto' | 'default' | 'not-allowed';
  direction?: directionType;
}
