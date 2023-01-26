import styled from 'styled-components';
import { directionType } from 'types/direction';

type scanType =
  | string[]
  | [string | 'auto']
  | [string | directionType, string | 'auto']
  | [string, string | 'auto', string]
  | [string, string, string, string | 'auto'];

export const marginDirection = (
  direction: [string | directionType, string | 'auto'] | string[]
) => {
  switch (direction[0]) {
    case 'top':
    case 'left':
    case 'right':
    case 'bottom':
      return `margin-${direction[0]}: ${direction[1]}`;
    default:
      return `margin: ${direction}`;
  }
};

export const marginType = (type: string) => {
  const scan: scanType = type.split(' ');
  switch (scan.length) {
    case 2:
      return marginDirection(scan);
    case 1:
    case 3:
    case 4:
      return `margin: ${scan}`;
    default:
      return;
  }
};
