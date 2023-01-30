import React from 'react';
import styled, { css } from 'styled-components';
import { marginCssType, marginToCss } from '../../utils/distance';
import * as C from '../../styles/theme/color';
import * as F from '../../styles/theme/font';
import { DefaultInput } from './Default';
import { LineInput } from './Line';

type kindType = 'LineInput' | 'DefaultInput';

export interface InputProps extends marginCssType {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  width?: number;
  className?: string;
  placeHolder?: string;
  kind: kindType;
  disabled: boolean;
  value: string | number;
  Icon?: JSX.Element;
  onClick?: () => void;
  message?: string;
  error: boolean;
}

export const Input = ({
  onChange,
  label,
  width = 450,
  className,
  placeHolder = 'Placeholder',
  kind = 'DefaultInput',
  disabled = false,
  value = '',
  Icon,
  onClick,
  margin,
  message,
  error = false,
}: InputProps) => {
  return (
    <_Wrapper margin={margin}>
      {label && (
        <_FieldLabel error={error} disabled={disabled}>
          {label}
        </_FieldLabel>
      )}
      <_Container width={width}>
        <_BaseInput
          onChange={onChange}
          className={className}
          value={value}
          disabled={disabled}
          placeholder={placeHolder}
          width={width}
          kind={kind}
          error={error}
          onClick={onClick}
        />
      </_Container>
      {!disabled && message && <_Message error={error}>{message}</_Message>}
    </_Wrapper>
  );
};

const _Wrapper = styled.div<marginCssType>`
  ${({ margin }) => marginToCss({ margin })};
`;

const _FieldLabel = styled.div<{ error: boolean; disabled: boolean }>`
  margin-bottom: 3px;
  color: ${({ error, disabled }) =>
    !disabled ? (error ? C.red : C.gray70) : C.gray50};
  ${F.font.Body4};
`;

const _Message = styled.div<{ error: boolean }>`
  margin-top: 5px;
  ${F.font.Caption};
  color: ${({ error }) => (error ? C.red : C.gray60)};
  ${F.font.Body4};
`;

const _Container = styled.div<{ width?: number }>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => width + 'px'};
  height: 45px;
`;

const _Icon = styled.div`
  position: absolute;
  background-color: black;
  right: 15px;
  width: 24px;
  height: 24px;
`;

export const _BaseInput = styled.input<InputProps>`
  position: absolute;
  width: ${({ width }) => width + 'px'};
  border: 0;
  outline: 0;
  padding: 0 10px 0 15px;
  color: ${({ disabled }) => (disabled ? C.gray50 : C.gray90)};
  &::placeholder {
    color: ${C.gray60};
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  ${({ kind, error, disabled }) => {
    switch (kind) {
      case 'DefaultInput':
        return DefaultInput(error, disabled);
      case 'LineInput':
        return LineInput(error);
      default:
        return '';
    }
  }}
`;
