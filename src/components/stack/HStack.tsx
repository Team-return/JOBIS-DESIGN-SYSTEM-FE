import { Stack, StackProps } from './Stack';

export const HStack = ({
  width,
  height,
  align,
  justify,
  gap,
  margin,
  children,
}: StackProps) => {
  return (
    <Stack
      direction="row"
      width={width}
      height={height}
      align={align}
      justify={justify}
      gap={gap}
      margin={margin}
    >
      {children}
    </Stack>
  );
};
