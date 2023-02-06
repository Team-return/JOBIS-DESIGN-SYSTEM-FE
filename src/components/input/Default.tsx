import { css } from 'styled-components';
import * as C from '../../styles/theme/color';
import * as F from '../../styles/theme/font';

export const DefaultInput = (error?: boolean, disabled?: boolean) => {
  return css`
    height: 45px;
    transition: 0.5s;
    border: 1px solid ${!disabled && error ? C.error : C.gray40};
    background-color: ${disabled ? C.gray40 : C.gray10};
    ${F.font.Body1};
    &:focus {
      border: 1px solid ${error ? C.error : C.gray60};
    }
  `;
};
