import { css } from 'styled-components';
import * as C from '../../styles/theme/color';

export const SwitchOn = (disabled: boolean) => {
  return css`
    background-color: ${disabled ? C.gray50 : '#0087ff'};
  `;
};
