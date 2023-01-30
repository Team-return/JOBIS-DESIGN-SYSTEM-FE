import { css } from 'styled-components';
import * as C from '../../styles/theme/color';

export const SwitchOff = (disabled: boolean) => {
  return css`
    background-color: ${disabled ? C.gray30 : C.gray40};
  `;
};
