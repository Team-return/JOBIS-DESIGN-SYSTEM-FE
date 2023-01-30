import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { icons } from '../../styles/icon';

const Svg = styled.svg`
  display: inline-block;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
  vertical-align: middle;

  path {
    fill: currentColor;
  }
`;

export const Icon: FunctionComponent<IconProps> = ({
  icon,
  size = 24,
  ...props
}: IconProps) => {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <>{icons[icon]}</>
    </Svg>
  );
};

export type IconType = keyof typeof icons;

export interface IconProps {
  icon: IconType;
  size?: number;
}
