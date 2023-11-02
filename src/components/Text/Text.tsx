import styled, { CSSProperties } from 'styled-components';
import { ReactNode } from 'react';
import { colorKeyOfType } from '../../styles/theme/color';
import { fontKeyOfType } from '../../styles/theme/font';
import { theme } from '../../styles/theme';
import { marginCssType, marginToCss } from '../../utils/distance';

interface TextProps extends marginCssType {
  className?: string;
  children?: ReactNode;
  color?: colorKeyOfType;
  display?: CSSProperties['display'];
  size?: fontKeyOfType;
  onClick?: () => void;
  cursor?: CSSProperties['cursor'];
  align?: CSSProperties['alignItems'];
  width?: number;
  whitespace?: CSSProperties['whiteSpace'];
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
  whitespace = 'pre-line',
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
      whitespace={whitespace}
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
  white-space: ${({ whitespace }) => whitespace};
`;
