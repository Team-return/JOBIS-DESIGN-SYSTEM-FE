import { InputHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { marginCssType, marginToCss, marginType } from '../../utils/distance';
import { theme } from '../../styles/theme';

interface CheckBoxProps
  extends marginCssType,
    InputHTMLAttributes<HTMLInputElement> {
  //TODO label?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const CheckBox = ({
  className,
  disabled = false,
  margin,
  children,
  ...props
}: CheckBoxProps) => {
  return (
    <_CheckBoxWrapper margin={margin} disabled={disabled}>
      <_Wrapper type="checkbox" disabled={disabled} {...props} />
      {children}
    </_CheckBoxWrapper>
  );
};

const _CheckBoxWrapper = styled.label<{
  margin?: marginType | marginType[];
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  ${theme.font.Body2};
  color: ${({ disabled }) =>
    disabled ? theme.color.gray40 : theme.color.gray60};
  ${({ margin }) => marginToCss({ margin })};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const _Wrapper = styled.input<CheckBoxProps>`
  appearance: none;
  width: 18px;
  height: 18px;
  accent-color: #0087ff;
  border: 1px solid
    ${({ disabled }) => (disabled ? theme.color.gray40 : theme.color.gray50)};
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${({ disabled }) =>
      disabled ? theme.color.gray40 : theme.color.skyblue};
  }
`;
