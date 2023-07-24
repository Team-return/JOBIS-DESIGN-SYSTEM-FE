import styled from 'styled-components';
import { ReactNode } from 'react';
import { colorKeyOfType } from '../../styles/theme/color';
import { fontKeyOfType } from '../../styles/theme/font';
import { theme } from '../../styles/theme';
import { marginCssType, marginToCss } from '../../utils/distance';

interface TextProps extends marginCssType {
  className?: string;
  children?: ReactNode;
  color?: colorKeyOfType;
  display?: 'inline' | 'inline-block' | 'block';
  size?: fontKeyOfType;
  onClick?: () => void;
  cursor?: 'pointer' | 'auto' | 'default';
  align?: 'center' | 'start' | 'end';
  width?: number;
  whiteSpace?: 'nowrap' | 'pre-line' | 'pre-wrap' | 'normal';
}

export const Text = ({
  display = 'block',
  children,
  color = 'gray90',
  size = 'Body1',
  className,
  onClick,
  cursor,
  align,
  margin,
  width,
  whiteSpace = 'pre-line',
}: TextProps) => {
  return (
    <Wrapper
      display={display}
      color={color}
      className={className}
      align={align}
      cursor={cursor}
      onClick={onClick}
      size={size}
      margin={margin}
      whiteSpace={whiteSpace}
      width={width}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<TextProps>`
  display: ${({ display }) => display};
  color: ${({ color }) => theme.color[color ?? 'gray90']};
  ${({ size }) => theme.font[size ?? 'Body1']};
  ${({ margin }) => marginToCss({ margin })};
  text-align: ${({ align }) => align};
  cursor: ${({ cursor }) => cursor};
  white-space: ${({ whiteSpace }) => whiteSpace};
`;
